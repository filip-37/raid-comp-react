import type { FC } from 'react';
import { Text, Switch, makeStyles, tokens } from '@fluentui/react-components';
import { WeatherSunnyRegular, WeatherMoonRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalL}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '60px',
  },
  appName: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  themeToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  themeLabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
  },
});

interface ToolbarProps {
  isDarkMode: boolean;
  onThemeToggle: (isDark: boolean) => void;
}

const Toolbar: FC<ToolbarProps> = ({ isDarkMode, onThemeToggle }) => {
  const styles = useStyles();

  return (
    <div className={styles.toolbar}>
      <Text className={styles.appName}>WoW Raid Setup Planner</Text>

      <div className={styles.themeToggle}>
        <WeatherSunnyRegular />
        <Switch
          checked={isDarkMode}
          onChange={(_, data) => onThemeToggle(data.checked)}
          aria-label="Toggle dark mode"
        />
        <WeatherMoonRegular />
      </div>
    </div>
  );
};

export default Toolbar;
