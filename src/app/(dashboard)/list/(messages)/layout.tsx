import SidebarWrapper from '@/components/shared/sidebar/SidebarWrapper';
import React from 'react'

type Props = React.PropsWithChildren<{}>;

const MessagesLayout = ({ children }: Props) => {
  return (
    <SidebarWrapper>{ children }</SidebarWrapper>
  )
}

export default MessagesLayout