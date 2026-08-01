import { Navigate, useParams } from 'react-router-dom'
import CaseStudyPage from '../components/case-study/CaseStudyPage'
import { robonoteData } from '../data/robonote'
import { easyData } from '../data/easy'
import { secureStayData } from '../data/secureStay'

const caseStudiesById = {
  'secure-stay': secureStayData,
  robonote: robonoteData,
  easy: easyData,
}

export default function CaseStudyDetail() {
  const { id } = useParams()
  const data = caseStudiesById[id]

  if (!data) {
    return <Navigate to="/" replace />
  }

  return <CaseStudyPage data={data} caseStudyId={id} />
}
