import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

interface SplashScreenTemplateProps extends ViewProps {
  children: ReactNode;
}

const SplashScreenTemplate: React.FC<SplashScreenTemplateProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreenTemplate;
