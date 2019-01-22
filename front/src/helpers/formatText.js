import React from 'react';
import { Text } from '../data/styledComponents';

export const formatText = (description) => {
  const double = /\n+/g
  return description.split(double).map((p, index) => {
    console.log(description)
    return (
      <Text className="mb-3" key={index}>{p}</Text>
    )
  })
}