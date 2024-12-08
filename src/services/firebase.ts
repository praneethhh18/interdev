import { 
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Candidate, Interview, Assessment } from '../types';

export async function createInterview(candidateId: string) {
  return addDoc(collection(db, 'interviews'), {
    candidateId,
    status: 'scheduled',
    createdAt: serverTimestamp(),
    scheduledFor: new Date()
  });
}

export async function getCandidateInterviews(candidateId: string) {
  const q = query(
    collection(db, 'interviews'),
    where('candidateId', '==', candidateId)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function submitAssessment(interviewId: string, assessment: Assessment) {
  const docRef = doc(db, 'interviews', interviewId);
  return updateDoc(docRef, {
    assessments: assessment,
    status: 'completed',
    completedAt: serverTimestamp()
  });
}