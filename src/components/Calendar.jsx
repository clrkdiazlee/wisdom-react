import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { Fragment, useState } from 'react'
import axios from "axios";

const tasks = [
  {
    id: 1,
    name: 'jabol',
    imageUrl:
      '/images/testimonies/russel.svg',
    startDatetime: '2023-04-11T13:00',
    endDatetime: '2023-04-12T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T09:00',
    endDatetime: '2022-05-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T17:00',
    endDatetime: '2022-05-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-06-09T13:00',
    endDatetime: '2022-06-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-13T14:00',
    endDatetime: '2022-05-13T14:30',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar() {

  const [addTask, setTask] = useState("");

  const newTask = (e) => {
    e.preventDefault();

    axios
      .post(`/daily-task/{id}`, {
        task: addTask
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayTasks = tasks.filter((task) =>
    isSameDay(parseISO(task.startDatetime), selectedDay)
  )

  return (
    <div className="pt-8 pb-36 md:px-[15rem] font-poppins">
      <div>
        <div className="md:grid md:grid-cols-9">
          <div className="md:col-span-6 pr-6">
            <div className="flex pb-2">
              <h2 className="flex-auto font-semibold text-gray-900 text-xl">
                <p className='font-light text-lg'>Calendar</p>{format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-16 text-md leading-6 text-blue-500 text-center pb-2 px-[3.7rem]">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-7 text-md md:px-12">
              {days.map((day, dayIdx) => (
                <button onClick={() => setSelectedDay(day)}
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    `h-[4.2rem] w-[3.7rem] shadow-[0px_6px_10px_-1px_#00000024] rounded-2xl relative ${classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      'text-blue-500',
                      !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-900',
                      !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-blue-400',
                      isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      'bg-calendarBg',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                      'font-semibold',
                    )}`
                  )}
                >
                  <div className='flex justify-end items-end h-full pr-2 pb-1'>
                    <div>
                      <div>
                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                          {format(day, 'd')}
                        </time>
                      </div>
                    </div>

                    {tasks.some((task) =>
                      isSameDay(parseISO(task.startDatetime), day)
                    ) && (
                        <div className="absolute left-0 w-4 h-full bg-sky-300 bottom-0 rounded-l-3xl"></div>
                      )}

                  </div>
                </button>
              ))}
            </div>
          </div>
          <section className='flex flex-col mt-12 md:mt-0 md:col-span-3'>
            <div>
          <div className=" border-black rounded-xl shadow-[0px_3px_20px_-10px_#a0aeAA] px-5">
            <div className='divide-y-[0.1rem] divide-slate-100'>
              <div className='flex justify-between pt-4 items-center gap-4'>
                <div className='text-2xl pb-2'>
                  Tasks
                </div>
                <time className='text-sm font-light ' dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                  {format(selectedDay, 'MMM dd, yyy')}
                </time>
              </div>
              <div>
                <div>
                  <ol className="pt-4 pb-10 space-y-1 text-sm leading-6 text-gray-500">
                    {selectedDayTasks.length > 0 ? (
                      selectedDayTasks.map((task) => (
                        <Task task={task} key={task.id} />
                      ))
                    ) : (
                      <p>No tasks for today.</p>
                    )}
                  </ol>
                </div>
              </div>
            </div>
            <form onSubmit={newTask}>
              <div className='pb-4'>
                <input
                  className="font-poppins text-xs h-10 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="addTask"
                  type="text"
                  placeholder="Enter your new task"
                  value={addTask}
                  onChange={(event) => setTask(event.target.value)}
                  required
                />
              </div>
              <div className='flex justify-center pb-4'>  
                <button
                  type="submit"
                  className='rounded-full w-72 h-10 bg-buttonBlue text-white font-poppins !font-bold tracking-wider text-sm'>
                  Add New Task
                </button>
              </div>
            </form>
          </div>
          </div>

          <div className='pt-5'>
          <div className="border-black rounded-xl shadow-[0px_3px_20px_-10px_#a0aeAA] px-5">
            <div>
                <div className='pt-4 text-2xl pb-2'>
                  Documentation
                </div>

              <div>
                <div>
                  <ol className="pt-4 pb-10 space-y-1 text-sm leading-6 text-gray-500">
                    {selectedDayTasks.length > 0 ? (
                      selectedDayTasks.map((task) => (
                        <Task task={task} key={task.id} />
                      ))
                    ) : (
                      <p>No tasks for today.</p>
                    )}
                  </ol>
                </div>
              </div>
            </div>
            <form onSubmit={newTask}>
              <div className='pb-4'>
                <input
                  className="font-poppins text-xs h-10 border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="addTask"
                  type="text"
                  placeholder="Enter your new task"
                  value={addTask}
                  onChange={(event) => setTask(event.target.value)}
                  required
                />
              </div>
              <div className='flex justify-center pb-4'>
                <button
                  type="submit"
                  className='rounded-full w-72 h-10 bg-buttonBlue text-white font-poppins !font-bold tracking-wider text-sm'>
                  Add New Task
                </button>
              </div>
            </form>
          </div>
          </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function Task({ task }) {
  let startDateTime = parseISO(task.startDatetime)
  let endDateTime = parseISO(task.endDatetime)

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={task.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{task.name}</p>
        <p className="mt-0.5">
          <time dateTime={task.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={task.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]