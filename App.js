import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Resume Practice</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionHeading}>Personal Information</Text>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Muqadsa Zaheen</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>muqadsazaheen30@gmail.com</Text>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>023333335555</Text>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>123 Main St, Rawalpindi, Pakistan</Text>

        <Text style={[styles.sectionHeading, { marginTop: 20 }]}>Education</Text>
        <Text style={styles.label}>Degree:</Text>
        <Text style={styles.value}>Currently studying in BS-IT 6th semester...</Text>
        <Text style={styles.label}>Major:</Text>
        <Text style={styles.value}>Computer Science</Text>
        <Text style={styles.label}>University:</Text>
        <Text style={styles.value}>Rawalpindi University</Text>
        <Text style={styles.label}>Graduation Year:</Text>
        <Text style={styles.value}>2025</Text>
        <Text style={styles.label}>Matric:</Text>
        <Text style={styles.value}>I have done my matric with 1000 marks...</Text>

        <Text style={styles.sectionHeading}>Experience</Text>
        <Text style={styles.label}>Company:</Text>
        <Text style={styles.value}>abcdefgffffffff</Text>
        <Text style={styles.label}>Position:</Text>
        <Text style={styles.value}>Front-end Development</Text>
        <Text style={styles.label}>Duration:</Text>
        <Text style={styles.value}>2019 - Present</Text>
        <Text style={styles.label}>Responsibilities:</Text>
        <Text style={styles.listItem}>Developed and maintained web applications.</Text>
        <Text style={styles.listItem}>Collaborated with cross-functional teams to deliver projects.</Text>
        <Text style={styles.listItem}>Implemented new features and resolved software bugs.</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>muqadsazaheen392@</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'gray',
    color: 'black',
    marginTop:80,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'left',
  },
  value: {
    marginBottom: 10,
    textAlign: 'left',
  },
  listItem: {
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default App;
