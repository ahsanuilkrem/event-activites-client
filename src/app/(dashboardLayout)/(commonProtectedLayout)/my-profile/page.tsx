import MyProfile from "@/src/components/modules/MyProfile/MyProfile";
import { getUserInfo } from "@/src/services/auth/getUserInfo";


const MyProfilePage = async () => {
  const userInfo = await getUserInfo();
  console.log(userInfo)
return <MyProfile userInfo={userInfo} />;   
};

export default MyProfilePage;