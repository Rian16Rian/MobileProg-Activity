import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Avatar from '../components/avatar/useravatar';
import Name from '../components/name/username';
import Joined from '../components/last_joined/userjoined';
import ProfileGroup from '../components/profile_group/profilegroup';
import SettingsGroup from '../components/settings/usersettings';
import Manage from '../components/manage/usermanagement';
import Notification from '../components/notif/usernotifs';
import DarkMode from '../components/dark_mode/userdark';
import { useTheme } from '../Theme';
import { Dark, Light } from '../ThemeStyles';

export default function UserAvatar() {
  const { darkMode, toggleTheme } = useTheme();
  const currentTheme = darkMode ? Dark : Light;

  return (
    <View style={[styles.container, currentTheme.container]}>
      <StatusBar hidden={false} />
      <Avatar theme={currentTheme} />
      <Name theme={currentTheme} />
      <Joined theme={currentTheme} />
      <ProfileGroup theme={currentTheme} />
      <Manage theme={currentTheme} />
      <SettingsGroup theme={currentTheme} />
      <Notification theme={currentTheme} />
      <DarkMode theme={currentTheme} toggleTheme={toggleTheme} darkMode={darkMode}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
  },
});
