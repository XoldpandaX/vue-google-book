import get from 'lodash.get';
import { cutStringByLength } from '@/utils';

export default function ({ data: { items = [] } }) {
  return (
    items.length
      ? items.map((item) => ({
        id: get(item, 'id', ''),
        title: (
          cutStringByLength(
            get(item, ['volumeInfo', 'title'], ''),
            40,
          )
        ),
      }))
      : []
  );
}
