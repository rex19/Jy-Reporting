import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './index.less'
import SFILogo from '../../img/SFILogo1.jpg'
//,background: 'rgba(230,230,230,.4)'
const HeaderComponent = (props) => (
  <div>
    <Grid divided>
      <Grid.Row >
        <Grid.Column width={16}>
          <div className='HeaderTitleDiv'>
            <h1 style={{ color: 'white' }}>上海**系统有限公司</h1>
            <a style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>**装配线</a>
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4} className='HeaderDiv'>
        <Grid.Column>
          <Button.Group size='massive' color='blue' className='buttonGroupStyle'>
            <Button >工单号:</Button>
            <Button positive>{props.WorkOrderCode || '0'}</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group size='massive' color='blue' className='buttonGroupStyle'>
            <Button>产品:</Button>
            <Button positive>{props.PartTypeCode || '0'}</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group size='massive' color='blue' className='buttonGroupStyle'>
            <Button >工单数量:</Button>
            <Button positive>{props.WorkOrderPlannedQuantity || '0'}</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group size='massive' color='blue' className='buttonGroupStyle'>
            <Button >完工数量:</Button>
            <Button positive>{props.WorkOrderFinishedQuantity || '0'}</Button>
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div className='HeaderLineName'>
      <Button
        style={{ margin: '15px' }}
        size='massive'
        color='teal'
        content={props.lineName}
        icon='hourglass start'
      // label={{ basic: false, color: 'teal', pointing: 'left', content: '线体'}}
      />
    </div>
  </div>


)

export default HeaderComponent;