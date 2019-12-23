import React from 'react';
import { Paper, makeStyles, Typography, Button, Divider } from '@material-ui/core';
import { TextField, Input } from 'final-form-material-ui';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Form, Field } from 'react-final-form'
import { Link, useHistory } from 'react-router-dom';
import { withFirebase } from '../../hoc/withFirebase';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    },
    actionBtn: {
        boxShadow: "none",
        zIndex: 0
    },
    btnPanel: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignContent: "space-between"
    },
    formControl: {
        marginBottom: theme.spacing(2)

    },
}));
const Register: React.FC = (props: any) => {
    const classes = useStyles();
    const history = useHistory();
    const onSubmit = (value: any) => {
        console.log('onsubmit')
        props.firebase
            .doCreateUserWithEmailAndPassword(value.email, value.password)
            .then((authUser: any) => {
                console.log(authUser)
                history.push('/login')
            })
            .catch((error: any) => {
                console.log(error)
                if(error.code ==  'auth/email-already-in-use'){
                    history.push('/login') 
                }
            });
    }
    const validate = async () => {
        console.log('onvalidate')
    }
    return (
        <Paper elevation={5} className={classes.container}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h4">Register</Typography>
                        <Field
                            name="email"
                            type="email"
                            component={TextField}
                            label="Enter email"
                            fullWidth
                            className={classes.formControl}
                        />
                        <Field
                            name="phone"
                            type="phone"
                            component={TextField}
                            label="Enter phone"
                            fullWidth
                            className={classes.formControl}
                        />
                        <Field
                            name="password"
                            component={Input}
                            className={classes.formControl}
                            type="password"
                            placeholder="Enter Password"
                            label="Enter Password"
                            fullWidth
                        />
                        <Field
                            name="confirm-password"
                            component={Input}
                            className={classes.formControl}
                            type="password"
                            label="Re-enter Password"
                            fullWidth
                        />
                        <div className={classes.btnPanel}>
                            <Button
                                color="primary"
                                size="medium"
                                variant="contained"
                                className={classes.actionBtn}
                                type="submit">Register</Button>
                            <Button
                                color="secondary"
                                size="medium"
                                className={classes.actionBtn}
                                onClick={()=> history.push('/login')}>Login</Button>
                        </div>
                    </form>
                )} />
            <Divider light orientation="horizontal" variant="middle" />
            <div className={classes.btnPanel}>

            </div>
        </Paper>
    );
}
export default withFirebase(Register)