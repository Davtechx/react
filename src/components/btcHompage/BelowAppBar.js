import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
 
  });

function BelowAppBar(props) {
    const classes = useStyles();
    
    return (
      <div>
        <CardHeader
          title="SPECTACULAR BITCOIN INVESTMENT"
          subheader="PROFITS FOR ALL!"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            BTC MetaTrade is a Bitcoin mining &amp; investment company where you
            can be a part of the peer-to-peer bitcoin community worldwide. Our
            investment portal is an afterthought of mindful planning &amp;
            guidance of technical experts to provide you the most profitable
            investment platform possible.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>

          <IconButton>
            <Button>Get Started</Button>
          </IconButton>

        </CardActions>
      </div>
    );
}

export default BelowAppBar;