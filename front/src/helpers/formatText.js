import React from 'react';
import { Text } from '../data/styledComponents';

const formatText = (description, props = {}) => {
  const double = /\n+/g
  return description.split(double).map((p, index) => {
    return (
      <Text className="mb-3" {...props}>{p}</Text>
    )
  })
}

export default formatText;
