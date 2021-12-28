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
      <p>
        <Button variant="contained" color="primary">Primary</Button>
      </p>
      <p>
        <Button variant="contained" color="secondary">Secondary</Button>
      </p>
      <p>
        <Button variant="outlined" color="primary">Secondary</Button>
      </p>
      <p>
        <Button variant="outlined" color="secondary">Secondary</Button>
      </p>
      <p>
        <Button color="primary">Secondary</Button>
      </p>
      <p>
        <Button color="secondary">Secondary</Button>
      </p>
    </section>
  );
};

export default observer(Home);
