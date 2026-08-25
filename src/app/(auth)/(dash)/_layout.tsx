import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    <Tabs
       >
       <Tabs.Screen 
          name="index"
          options={
            {
              title:"Home",
              tabBarIcon: (color)=> 
                (<MaterialIcons size={28} name="home" color={"#4166"} />),
            }
          }
       />
       <Tabs.Screen 
          name="graficos"
          options={
            {
              title:"Graficos",
              tabBarIcon: (color)=> 
                (<MaterialIcons size={28} name="auto-graph" color={"#4166"} />),
            }
          }
       />

    </Tabs>
  )
}