// @ name : TabList
// @ description : index에서 사용되는 탭 리스트에 대한 컴포넌트

import s from './TabList.module.scss';

import TabButton from '@/domains/main/components/atoms/TabButton';

interface TabListProps extends React.HTMLAttributes<HTMLUListElement> {
  item: { text: string; value: string; }[];
  active: string;
  setActive: (k: string) => void;
}

const TabList:React.FC<TabListProps> = ({ item, active, setActive, ...props }) => {

  return (
    <ul className={ s['list-tab'] }
        role="tablist"
        {...props}>
          {
            item.map((k, i) => (
              <li key={ k.value }
                  role="none">
                <TabButton value={ k.value }
                           isActive={ active === k.value }
                           click={ setActive }
                           id={`tabBtn${i}`}
                           aria-controls={`tabPanel${i}`}>
                  { k.text }
                </TabButton>
              </li>
            ))
          }
    </ul>
  )
}

export default TabList;