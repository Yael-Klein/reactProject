import React from 'react';
import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

export default function MenuF() {
    return (
    <Menu menuButton={<MenuButton>{"הוספת קבוצת לימוד "}</MenuButton>}>
            <MenuItem>{"דוח הכנת שיעורי בית לכיתה"}</MenuItem>
            <MenuItem>{"התפלגות שיעורי בית בכלל התלמידים עפ ימות השבוע"}</MenuItem>
            <SubMenu label="Open">
                <MenuItem>index.html</MenuItem>
                <MenuItem>example.js</MenuItem>
                <MenuItem>about.css</MenuItem>
            </SubMenu>
            <MenuItem>Save</MenuItem>
        </Menu>
    );
}



// import React, { useState } from 'react';
// import {
//     Menu,
//     MenuItem,
//     MenuButton,
//     SubMenu,
//     MenuHeader,
//     MenuDivider,
//     MenuRadioGroup
// } from '@szhsin/react-menu';
// import '@szhsin/react-menu/dist/index.css';

// export default function MenuF() {

//     const [textColor, setTextColor] = useState('red');
//     const [isBold, setBold] = useState(true);
//     const [isItalic, setItalic] = useState(true);
//     const [isUnderline, setUnderline] = useState(false);

//     return (
//         <>
//             <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
//                 <MenuItem>New File</MenuItem>
//                 <MenuItem>Save</MenuItem>
//                 <MenuDivider />
//                 <MenuHeader>Text settings</MenuHeader>

//                 <SubMenu label="Text color">
//                     <MenuRadioGroup
//                         value={textColor}
//                         onChange={e => setTextColor(e.value)}>
//                         <MenuItem value={'red'}>Red</MenuItem>
//                         <MenuItem value={'green'}>Green</MenuItem>
//                         <MenuItem value={'blue'}>Blue</MenuItem>
//                     </MenuRadioGroup>
//                 </SubMenu>

//                 <SubMenu label="Text style">
//                     <MenuItem type="checkbox" checked={isBold}
//                         onClick={e => setBold(e.checked)}>
//                         Bold
//                     </MenuItem>
//                     <MenuItem type="checkbox" checked={isItalic}
//                         onClick={e => setItalic(e.checked)}>
//                         Italic
//                     </MenuItem>
//                     <MenuItem type="checkbox" checked={isUnderline}
//                         onClick={e => setUnderline(e.checked)}>
//                         Underline
//                     </MenuItem>
//                 </SubMenu>
//             </Menu>

//             <div className="sample-text" style={{
//                 color: textColor,
//                 fontWeight: isBold ? 'bold' : 'initial',
//                 fontStyle: isItalic ? 'italic' : 'initial',
//                 textDecoration: isUnderline ? 'underline' : 'initial'
//             }}>Sample text</div>
//         </>
//     );
// }