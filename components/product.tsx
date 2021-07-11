import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {useShoppingCart, formatCurrencyString} from 'use-shopping-cart'

const ImagePrefix = '/products/'
const NoImage = 'no_image.jpg'

const useStyles = makeStyles((theme) => ({
  card_root: {
    minWidth: 275,
  },
}));

export default function Product({fruit}: any) {
  const classes = useStyles()
  const {addItem, removeItem} = useShoppingCart()
  const image = fruit.image ? ImagePrefix + fruit.image : ImagePrefix + NoImage

  return (
    <Grid item xs={4}>
      <Card className={classes.card_root}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={image}
            title={fruit.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {fruit.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {fruit.description}<br/>
              {formatCurrencyString({
              value: fruit.price,
              currency: fruit.currency,
            })}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => addItem(fruit)}>
            カートに入れる
          </Button>
          <Button size="small" color="primary" onClick={() => removeItem(fruit.sku)}>
            削除
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
