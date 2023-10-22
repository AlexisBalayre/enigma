import clsx from 'clsx'

export function Button({ className, ...props }: any) {
  return (
    <button
      className={clsx(
        'text-xl text-white bg-gradient-to-b from-sky-400 to-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-blue-700 font-bold rounded-xl py-5 px-12 text-center mr-0',
        className
      )}
      {...props}
    />
  )
}
