import type { FC } from 'react';

import type { IconProps } from '../types/Icon';

import './Icon.css';
import { Tooltip } from '@fluentui/react-components';

const Icon: FC<IconProps> = ({ name, iconURL, size, onSelect, c }) => {
  return (
    <Tooltip content={name} relationship="label">
      <div
        className="icon-cell cursor-pointer"
        onClick={() => onSelect(name, c)}
      >
        <div
          className={`icon${size}`}
          data-env="live"
          data-tree="live"
          data-game="wow"
        >
          <ins
            style={{
              backgroundImage: `url(https://wow.zamimg.com/images/wow/icons/${size}/${iconURL}.jpg)`,
            }}
          ></ins>
          <del
            style={{
              backgroundImage: `url(https://wow.zamimg.com/images/Icon/${size}/border/default.png)`,
            }}
          ></del>
        </div>
      </div>
    </Tooltip>
  );
};

export default Icon;
