import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import NewsItem from './NewsItem';
import { NewsData } from '../utils/handle-api';

interface Props {
    item: NewsData[];
}

    
export default function NewsList({ item }: Props) {

  return (
    <FlatList
              data={item}
              renderItem={({item}) => 
                <NewsItem key={item.id.toString()}
                  title={item.title}
                  image={item.image}
                  published={item.published}
                  link={item.link}
                  />
              }
              keyExtractor={item => item.id.toString()}
            />
  );
}
