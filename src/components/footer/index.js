import React from 'react';
import './index.less'
import { Grid } from 'semantic-ui-react';
import DialChart from '../charts/dialChart';
import CycletimeDialChart from '../charts/cycletimeDialChart';
import BarChart from '../charts/barChart';

const FooterComponent = (props) => (
  <div className='FooterDivTotal'>
    <Grid divided>
      <Grid.Row columns={4} >
        <Grid.Column>
          <div className='FooterChartsDiv'>
            <DialChart title='OEE' data={props.resultTargetOEE} punctuation='%' />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='FooterChartsDiv'>
            <DialChart title='质量合格率' data={props.resultPerQualified} punctuation='%' />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='FooterChartsDiv'>
            <CycletimeDialChart title='Cycletime'
              resultPlanCycleTime={props.resultPlanCycleTime}
              resultActCycleTime={props.resultActCycleTime}
              resultPerCycleTime={props.resultPerCycleTime}
              punctuation='%' />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='FooterChartsDiv'>
            <DialChart title='计划完成率' data={props.resultPerPlanComplete} punctuation='%' />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} className='FooterDiv'>
        <Grid.Column>
          <div className='FooterChartsDiv'>
            <BarChart
              lineName={props.lineName}
              PlannedQuantity={props.PlannedQuantity}
              FinishedQuantity={props.FinishedQuantity}
              IntervalHour={props.IntervalHour}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default FooterComponent;