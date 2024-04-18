import { Typography } from '@material-ui/core'
import {} from '@material-ui/icons'
import useStyles from './styles'

function App() {
  const classes = useStyles()
  return (
    <Typography variant='h6' align='center' className={classes.hello}>Hello, World</Typography>
  )
}
export default App;
