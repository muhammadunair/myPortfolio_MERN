import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import Item from 'antd/es/list/Item';

const TimeLine = ({ timelines = [] }) => {
  return (
    <div className='flex justify-center'>
      {/* {timelines.map((item, index) => ( */}
      <Timeline
    mode="right"
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
      {/* ))} */}
    </div>
  )
}

export default TimeLine;