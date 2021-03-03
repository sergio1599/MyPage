import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        maxHeight: 800,
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Word Search and CrossWord"
                    height="140"
                    image="/images/word_search_and_crossword.png"
                    title="Word Search and CrossWord"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Word Search and CrossWord
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This was a project made for a subject called TGS in which it has two interfaces, one for
                        wordsearch, and the other for crossword.

                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
