import React, { Component, Fragment } from 'react';
import {
  Button,
  FormControl,
  Container,
  Table,
  TableRow,
  TableCell,
  FormLabel,
  FormGroup,
} from '@mui/material';

export interface IProps {
  myApp?: any;
  password?: string;
}
export interface IState {
}
export default class Form extends Component<IProps,IState> {
  state: IState;
  constructor(props: IProps, state: IState) {
    super(props)
    this.state = state;
    console.log('Form', this)
  }

  render() {
    const { name, email, logged } = this.props.myApp
    return (
      <Table>
        <TableRow>
          <TableCell>
            <div className="control">
              <input className="input" type="text" placeholder="Input" />
            </div>
            </TableCell>
          </TableRow>
        <TableRow>
          <TableCell>
            <p className="control">
              <span className="select">
                <select>
                  <option>Select dropdown</option>
                </select>
              </span>
            </p>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Button variant="contained">Primary</Button>
            <Button variant="text">Link</Button>
          </TableCell>
        </TableRow>
      </Table>
    )
  }
}
