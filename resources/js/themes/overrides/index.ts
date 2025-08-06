// material-ui
import { Theme } from '@mui/material/styles';

// third-party
import { merge } from 'lodash-es';

// project-imports
import Button from './Button';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Button(theme)
  );
}
