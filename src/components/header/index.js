import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import './index.less'
import SFILogo from '../../img/SFILogo2.jpg'
//,background:'rgba(230,230,230,.2)'
const HeaderComponent = (props) => (
  <div>
    <Grid divided>
      <Grid.Row >

        <Grid.Column width={16}>

          <div className='HeaderTitleDiv'>

            <h1 style={{ color: 'white' }}>上海交运汽车动力系统有限公司</h1>
            <a style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>GFX装配线</a>
            <img src={SFILogo} alt='您的浏览器需要升级，谢谢' className='HeaderLogoImg' style={{ width: '15%', height: '50%', background: 'rgba(230,230,230,.4)' }} />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={4} className='HeaderDiv'>
        <Grid.Column>
          <Button.Group className='buttonGroupStyle'>
            <Button >工单号:</Button>
            <Button positive>{props.WorkOrderCode || '0'}</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group className='buttonGroupStyle'>
            <Button>产品:</Button>
            <Button positive>{props.PartTypeCode || '0'}</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group className='buttonGroupStyle'>
            <Button>工单数量:</Button>
            <Button positive>{props.WorkOrderPlannedQuantity || '0'}</Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column>
          <Button.Group className='buttonGroupStyle'>
            <Button>完工数量:</Button>
            <Button positive>{props.WorkOrderFinishedQuantity || '0'}</Button>
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div className='HeaderLineName'>
      <Button
        style={{ margin: '15px' }}
        color='teal'
        content='线体:'
        icon='hourglass start'
        label={{ basic: true, color: 'teal', pointing: 'left', content: props.lineName }}
      />
    </div>
  </div>


)

export default HeaderComponent;