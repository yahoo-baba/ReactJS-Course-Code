import React from 'react'

export default function ProgressBar({ current, total}) {
  const progress = ((current + 1) / total) * 100;

  return (
   <div className="progress mb-3">
        <div className="progress-bar" style={{width: `${progress}%`}}>
          {Math.round(progress)}%
        </div>
    </div> 
  )
}
