import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  '@global': {
    [[
      `input[type='number']::-webkit-inner-spin-button`,
      `input[type='number']::-webkit-outer-spin-button`,
    ]]: {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
});
