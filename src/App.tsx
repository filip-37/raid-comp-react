import { useState, useEffect } from 'react';
import './App.css';

import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Card,
  CardHeader,
  Dropdown,
  Option,
  Label,
  Slider,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableCellLayout,
  Button,
  useId,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  Toaster,
  type ToastIntent,
} from '@fluentui/react-components';

import Icon from './components/Icon';
import Toolbar from './components/Toolbar';
import type { ClassIconData, IconData, IconSize, Source } from './types/Icon';

import { classes, hunterPets, buffs_and_debuffs } from './data/data';
import {
  CheckmarkFilled,
  DeleteFilled,
  DismissFilled,
} from '@fluentui/react-icons';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [size, setSize] = useState<IconSize>('medium');

  const [raidSize, setRaidSize] = useState<10 | 25>(10);
  const [tankCount, setTankCount] = useState<number>(2);
  const [healCount, setHealCount] = useState<number>(2);

  const [setup, setSetup] = useState<IconData[]>([]);
  const [pets, setPets] = useState<IconData[]>([]);

  const [buffsAndDebuffs, setBuffsAndDebuffs] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    setBuffsAndDebuffs(checkBuffsAndDebuffs());
  }, [setup, pets]);

  const checkBuffsAndDebuffs = (): { [key: string]: boolean } => {
    const presentBuffsAndDebuffs: { [key: string]: boolean } = {};

    // Helper function to check sources
    const checkSources = (sources: Source[]): boolean => {
      for (const source of sources) {
        if (source.type === 'class') {
          // Check if any selected specialization matches this class and optionally, its spec
          const classMatch = setup.some((item) => {
            // Type guard to ensure item is SelectedSpecialization
            if ('class' in item) {
              const selectedSpec = item;
              const isClassMatch = selectedSpec.class === source.name;
              if (source.spec) {
                // If specific specs are required, check if the selected spec's name is in the source.spec array
                return isClassMatch && source.spec.includes(selectedSpec.name);
              }
              return isClassMatch;
            }
            return false; // Not a class specialization
          });
          if (classMatch) return true;
        } else if (source.type === 'hunter_pet') {
          // Check if any selected hunter pet matches this family name
          const petMatch = pets.some((item) => {
            // Type guard to ensure item is SelectedHunterPet
            if ('name' in item) {
              const selectedPet = item;
              return selectedPet.name === source.name;
            }
            return false; // Not a hunter pet
          });
          if (petMatch) return true;
        }
      }
      return false; // No source found in the setup for this buff/debuff
    };

    // Check all buffs
    for (const buffKey in buffs_and_debuffs.buffs) {
      if (
        Object.prototype.hasOwnProperty.call(buffs_and_debuffs.buffs, buffKey)
      ) {
        const buff = buffs_and_debuffs.buffs[buffKey];
        presentBuffsAndDebuffs[buff.name] = checkSources(buff.sources);
      }
    }

    // Check all debuffs
    for (const debuffKey in buffs_and_debuffs.debuffs) {
      if (
        Object.prototype.hasOwnProperty.call(
          buffs_and_debuffs.debuffs,
          debuffKey
        )
      ) {
        const debuff = buffs_and_debuffs.debuffs[debuffKey];
        presentBuffsAndDebuffs[debuff.name] = checkSources(debuff.sources);
      }
    }

    return presentBuffsAndDebuffs;
  };

  const handleThemeToggle = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  const roleOrder = {
    Tank: 1,
    DPS: 2,
    Healer: 3,
  };

  const onSpecSelect = (name: string, c: ClassIconData) => {
    if (c === undefined) {
      const item = hunterPets.find((p) => p.name === name);

      if (pets.length === setup.filter((s) => s.class === 'Hunter').length) {
        notify('Pet count', 'Maximum number of hunter pets reached.', 'error');
        return;
      }

      setPets([...pets, item]);
      return;
    }
    if (name.trim() !== '') {
      const item = c.specializations.find((s) => s.name === name);

      if (setup.length === raidSize) {
        notify('Raid size', 'Maximum number of players reached.', 'error');
        return;
      }
      if (
        item.role === 'Tank' &&
        setup.filter((s) => s.role === 'Tank').length === tankCount
      ) {
        notify('Tank count', 'Maximum number of tanks reached.', 'error');
        return;
      }
      if (
        item.role === 'Healer' &&
        setup.filter((s) => s.role === 'Healer').length === healCount
      ) {
        notify('Healer count', 'Maximum number of healers reached.', 'error');
        return;
      }

      if (item) {
        const fullItem = { ...item, class: c.class_name };
        const s = [...setup, fullItem].sort((a, b) => {
          return roleOrder[a.role] - roleOrder[b.role];
        });
        setSetup(s);
      }
    }
  };

  const renderRole = (role: string) => {
    switch (role) {
      case 'DPS':
        return (
          <svg viewBox="0 0 24 24" style={{ height: '20px' }}>
            <path
              fill="currentColor"
              d="M6.92,5H5L14,14L15,13.06M19.96,19.12L19.12,19.96C18.73,20.35 18.1,20.35 17.71,19.96L14.59,16.84L11.91,19.5L10.5,18.09L11.92,16.67L3,7.75V3H7.75L16.67,11.92L18.09,10.5L19.5,11.91L16.83,14.58L19.95,17.7C20.35,18.1 20.35,18.73 19.96,19.12Z"
            ></path>
          </svg>
        );
      case 'Healer':
        return (
          <svg viewBox="0 0 24 24" style={{ height: '20px' }}>
            <path
              fill="currentColor"
              d="M18 14H14V18H10V14H6V10H10V6H14V10H18"
            ></path>
          </svg>
        );
      case 'Tank':
        return (
          <svg viewBox="0 0 24 24" style={{ height: '20px' }}>
            <path
              fill="currentColor"
              d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"
            ></path>
          </svg>
        );
    }
  };

  const toasterId = useId('toast');
  const { dispatchToast } = useToastController(toasterId);
  const notify = (title: string, message: string, intent: ToastIntent) =>
    dispatchToast(
      <Toast>
        <ToastTitle>{title}</ToastTitle>
        <ToastBody subtitle={message}></ToastBody>
      </Toast>,
      { intent }
    );

  return (
    <FluentProvider theme={isDarkMode ? webDarkTheme : webLightTheme}>
      <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto p-4">
        <Toolbar isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />

        {/* Class selector */}
        <Card className="mt-5">
          <CardHeader header={<b>Specializations</b>} />
          <div className="flex flex-wrap gap-3">
            {classes.map((c: ClassIconData) => {
              return c.specializations.map((s: IconData) => (
                <Icon
                  key={s.name}
                  name={s.name}
                  iconURL={s.iconURL}
                  size={size}
                  c={c}
                  onSelect={onSpecSelect}
                />
              ));
            })}
          </div>
        </Card>

        {/* Hunter pet selector */}
        {setup.some((s) => s.class === 'Hunter') && (
          <Card className="mt-5" disabled>
            <CardHeader header={<b>Hunter pets</b>} />
            <div className="flex flex-wrap gap-3">
              {hunterPets.map((pet) => (
                <div
                  className={
                    pet.bm_only &&
                    !setup.find((s) => s.name === 'Beast Mastery')
                      ? 'opacity-25 pointer-events-none'
                      : ''
                  }
                >
                  <Icon
                    key={pet.name}
                    name={pet.name}
                    iconURL={pet.iconURL}
                    size={size}
                    onSelect={onSpecSelect}
                  />
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Setup settings */}
        <Card className="mt-5">
          <CardHeader header={<b>Settings</b>} />
          <div className="flex gap-3">
            <Dropdown
              id="raidSize"
              placeholder="Select raid size"
              defaultValue={'10 man'}
              onOptionSelect={(_event, data) => setRaidSize(data.optionValue)}
              style={{ maxWidth: '400px' }}
            >
              {[10, 25].map((option) => (
                <Option key={option} text={`${option} man`} value={option}>
                  {option} man
                </Option>
              ))}
            </Dropdown>

            <div className="flex flex-col ">
              <Label htmlFor="tankCount" className="flex gap-1">
                <svg viewBox="0 0 24 24" style={{ height: '20px' }}>
                  <path
                    fill="currentColor"
                    d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"
                  ></path>
                </svg>
                <b>Tanks:</b> {tankCount}
              </Label>
              <Slider
                defaultValue={2}
                step={1}
                min={0}
                max={5}
                id="tankCount"
                onChange={(_e, data) => setTankCount(data.value)}
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="healCount" className="flex gap-1">
                <svg viewBox="0 0 24 24" style={{ height: '20px' }}>
                  <path
                    fill="currentColor"
                    d="M18 14H14V18H10V14H6V10H10V6H14V10H18"
                  ></path>
                </svg>
                <b>Healers:</b> {healCount}
              </Label>
              <Slider
                defaultValue={2}
                step={1}
                min={0}
                max={5}
                id="healCount"
                onChange={(_e, data) => setHealCount(data.value)}
              />
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card className="mt-5">
            <CardHeader
              header={
                <>
                  <b className="me-2">Setup</b> {setup.length}/{raidSize}
                </>
              }
            />

            <Table>
              <TableBody>
                {setup.map((spec, index) => (
                  <TableRow key={`${spec.name}-${index}`}>
                    <TableCell>
                      <TableCellLayout>
                        <div className="flex flex-row gap-3">
                          {renderRole(spec.role)}
                          <Icon
                            key={`${spec.name}-${index}`}
                            name={spec.name}
                            iconURL={spec.iconURL}
                            size={'small'}
                          />
                        </div>
                      </TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>{spec.name}</TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>
                        <Button
                          icon={<DeleteFilled />}
                          onClick={() =>
                            setSetup(setup.filter((_, i) => i !== index))
                          }
                        />
                      </TableCellLayout>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {pets && pets.length > 0 && (
              <>
                <b>Pets</b>
                <Table
                  arial-label="Default table"
                  style={{ minWidth: '510px' }}
                >
                  <TableBody>
                    {pets.map((p, index) => (
                      <TableRow key={`${p.name}-${index}`}>
                        <TableCell>
                          <TableCellLayout>
                            <div className="flex flex-row gap-3">
                              {renderRole('DPS')}
                              <Icon
                                key={`${p.name}-${index}`}
                                name={p.name}
                                iconURL={p.iconURL}
                                size={'small'}
                              />
                            </div>
                          </TableCellLayout>
                        </TableCell>
                        <TableCell>
                          <TableCellLayout>{p.name}</TableCellLayout>
                        </TableCell>
                        <TableCell>
                          <TableCellLayout>
                            <Button
                              icon={<DeleteFilled />}
                              onClick={() =>
                                setPets(pets.filter((_, i) => i !== index))
                              }
                            />
                          </TableCellLayout>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )}
          </Card>

          <Card className="mt-5">
            <CardHeader header={<b>Buffs and Debuffs</b>} />
            <Table>
              <TableBody>
                {Object.keys(buffsAndDebuffs).map((bd) => (
                  <TableRow key={bd}>
                    <TableCell>
                      <TableCellLayout>{bd}</TableCellLayout>
                    </TableCell>
                    <TableCell>
                      <TableCellLayout>
                        {buffsAndDebuffs[bd] ? (
                          <CheckmarkFilled className="text-green-600" />
                        ) : (
                          <DismissFilled className="text-red-600" />
                        )}
                      </TableCellLayout>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>

      <Toaster toasterId={toasterId} />
    </FluentProvider>
  );
}

export default App;
