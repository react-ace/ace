import React, { useEffect, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import { isEmpty } from 'lodash';

interface IProps {}
interface IState {}

const Home = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <p>Hello</p>
      <Button variant="contained" color="primary">Hello</Button>
    </section>
  );
};

export default observer(Home);
