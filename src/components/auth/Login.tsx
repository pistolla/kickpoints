import React, { Fragment, useState } from 'react';
import classes from '*.module.css';
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
    formControl: {
        marginBottom: theme.spacing(2)

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
    }
}));
const Login: React.FC = (props: any) => {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const onSubmit = (value: any) => {
        console.log("onSubmit")
        props.firebase
            .doSignInWithEmailAndPassword(value.email, value.password)
            .then(() => {
                history.push('/');
            })
            .catch((error: any) => {
                console.log(error)
                if(error.code == 'auth/user-not-found'){
                    history.push('/register')
                }
            });
    }
    const validate = async (value: any) => {
        console.log("onValidate");
    }
    return (
        <Paper elevation={5} className={classes.container}>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, pristine, invalid }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h4">Login</Typography>
                        <Field
                            name="email"
                            type="email"
                            component={TextField}
                            label="Enter email"
                            margin="normal"
                            fullWidth
                            className={classes.formControl}
                        />
                        <Field
                            name="password"
                            component={Input}
                            className="input"
                            type="password"
                            placeholder="enter Password"
                            fullWidth
                            endAdornment={
                                <InputAdornment position="end">
                                    <Link className="inputLink" to="/forgot">
                                        Forgot password?
                            </Link>
                                </InputAdornment>
                            }
                        />
                        <div className={classes.btnPanel}>
                            <Button
                                color="primary"
                                size="medium"
                                variant="contained"
                                className={classes.actionBtn}
                                type="submit">Login</Button>
                            <Button
                                color="secondary"
                                size="medium"
                                className={classes.actionBtn}
                                onClick={() => history.push('/register')}>Register</Button>
                        </div>
                    </form>
                )} />
            <Divider light orientation="horizontal" variant="middle" />
            <div className={classes.btnPanel}>

            </div>
        </Paper>
    );
}
export default withFirebase(Login)