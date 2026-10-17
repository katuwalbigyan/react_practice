import Tabs from './Tabs'

const TabTest = () => {

    function RandomComponent(){
        return <h1>Some random content</h1>
    }

    const tabs =[
        {
            label: 'Tab 1',
            content: 'This is content for Tab 1'
        },
        {
            label: 'Tab 2',
            content: 'This is content for Tab 2'
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        },
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }

  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  )
}

export default TabTest
