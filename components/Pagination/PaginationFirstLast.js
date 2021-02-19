import React from 'react';

const colors = [
  'blueGray',
  'gray',
  'brown',
  'deepOrange',
  'orange',
  'amber',
  'yellow',
  'lime',
  'lightGreen',
  'green',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'deepPurple',
  'purple',
  'pink',
  'red',
];

const PaginationFirstLast = ({ color }) => {
  return (
    <>
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none">
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm tracking-wider flex w-14 h-8 mx-1 p-0 rounded items-center justify-center leading-tight relative bg-transparent text-gray-800 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                First
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-transparent text-gray-800 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                <span className="material-icons">keyboard_arrow_left</span>
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-${color}-500 text-white shadow-md`}
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative bg-transparent text-gray-800 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                <span className="material-icons">keyboard_arrow_right</span>
              </a>
            </li>

            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={`text-sm tracking-wider flex w-14 h-8 mx-1 p-0 rounded items-center justify-center leading-tight relative bg-transparent text-gray-800 hover:bg-gray-500 hover:bg-opacity-20`}
              >
                Last
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default PaginationFirstLast;

// export default function PaginationSimple() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Pagination key={key} color={prop} />;
//       })}
//     </>
//   );
// }