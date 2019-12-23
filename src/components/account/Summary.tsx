import React from 'react';
import { Grid, GridList, GridListTile, Card, CardContent, CardActions, IconButton, Typography, makeStyles, GridListTileBar, ListSubheader } from '@material-ui/core';
import { ERC20Icon } from 'dapparatus';

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-start",
        padding: theme.spacing(4)
    },
    leftcontent: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-start'
    },
    rightcontent: {
        alignSelf: 'flex-end'
    },
    activitycard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    activitycarddetail: {
        display: 'flex',
        flexDirection: 'column',
    }
}));
export const Summary: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item>
                <ListSubheader component="div">
                    Your Summary
                        </ListSubheader>
            </Grid>
            <Grid item>
                <Card>
                    <CardContent className={classes.content}>
                        <div className={classes.leftcontent}>
                            <Typography variant="h1">765400</Typography>
                            <Typography variant="h4"></Typography>
                        </div>
                        <IconButton className={classes.rightcontent}>
                            <ERC20Icon />
                        </IconButton>
                    </CardContent>
                    <CardActions>
                        <IconButton><ERC20Icon /> SEND</IconButton>
                        <IconButton><ERC20Icon /> RECEIVE</IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item>
                <GridList cellHeight={180}>
                    <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                        <ListSubheader component="div">
                            Activity
                        </ListSubheader>
                    </GridListTile>
                    <GridListTile>
                        <Card>
                            <CardContent className={classes.activitycard}>
                                <IconButton></IconButton>
                                <div className={classes.activitycarddetail}>
                                    <Typography variant="h4">Activity Detail</Typography>
                                    <Typography variant="h6">Activity tokens</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </GridListTile>
                </GridList>
            </Grid>
        </Grid>
    );
}