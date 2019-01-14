import React from "react";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";

export default class BoardInputFormDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleValueChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    };

    doBoardWrite = () => {
        (async () => {
            const rawResponse = await fetch('http://13.209.215.33:3001/board/write', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            const content = await rawResponse.json();
            //console.log(content);

            if(content.code === 200) {
                this.props.handleSaveAfter();
            } else {
                console.log(content);
            }
        })();
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Write
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                > Write
                    <DialogTitle id="form-dialog-title">등록</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            내용을 입력하세요.
                        </DialogContentText>
                        <div>
                            <Grid container spacing={16} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField id="name" label="이름" margin="dense" fullWidth onChange={this.handleValueChange}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={16} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField id="country" label="나라" margin="dense" fullWidth onChange={this.handleValueChange}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={16} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField id="city" label="도시" margin="dense" fullWidth onChange={this.handleValueChange}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div>
                            <Grid container spacing={16} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField id="salary" label="비용" margin="dense" fullWidth onChange={this.handleValueChange}/>
                                </Grid>
                            </Grid>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.doBoardWrite} color="primary">
                            작성
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            취소
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

BoardInputFormDialog.propTypes = {
    handleSaveAfter: PropTypes.func.isRequired
};