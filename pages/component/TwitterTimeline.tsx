import { Timeline } from 'react-twitter-widgets'

const TwitterTimeline = ()=>{
    return <Timeline
        dataSource={{
            sourceType: 'profile',
            screenName: 'sit_densan'
        }}
        options={{
            height: '400'
        }}
    />
}

export default TwitterTimeline