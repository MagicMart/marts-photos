import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdMood as Icon } from 'react-icons/md';

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Photo portfolio`)
    .items([
      // create new sub item
      S.listItem()
        .title('About me')
        .icon(() => (
          <strong>
            <Icon />
          </strong>
        ))
        .child(
          S.editor()
            .schemaType('about')
            // make a new document ID, so we don't have a random string of numbers
            .documentId('about')
        ),
      // add in the rest of our document items
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'about'),
    ]);
}
