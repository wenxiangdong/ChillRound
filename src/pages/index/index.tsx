import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useCommonStoreActions, useSomeThing } from '@/stores/common'
import './index.less'


export default function Index() {

  const someThing = useSomeThing();
  const { loadSomeThing } = useCommonStoreActions();

  useLoad(() => {
    console.log('Page loaded.');
    loadSomeThing();
  })

  return (
    <View className='index'>
      <Text>Hello {someThing}!</Text>
    </View>
  )
}
