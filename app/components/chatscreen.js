import React, { useRef, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

const ChatScreen = ({ chatMessages }) => {
  const flatListRef = useRef();

  useEffect(() => {
    // Scroll to the bottom when chatMessages change
    flatListRef.current.scrollToEnd({ animated: true });
  }, [chatMessages]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <FlatList
        ref={flatListRef}
        data={chatMessages}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body1}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <View style={[styles.chatContainer, { justifyContent: item.type === 'user' ? 'flex-end' : 'flex-start' }]}>
            <View style={[styles.chatBubble, { backgroundColor: item.type === 'user' ? '#DCF8C6' : '#F0F0F0' }]}>
              <Text style={{ fontWeight: 'bold', color: item.type === 'user' ? '#006400' : '#FF0000' }}>
                {item.type === 'user' ? <Text>You</Text> : <Text>Bot</Text>}
              </Text>
              {/* Ensure that the text is wrapped within a Text component */}
              <Text style={styles.chatText}>{item.text}</Text>
            </View>
          </View>
        )}
        inverted // Display items from bottom to top
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body1: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  chatContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  chatBubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  chatText: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default ChatScreen;
