import type { Metadata } from 'next';
import Quizzes from '@/components/Quizzes';

export const metadata: Metadata = {
  title: 'Quizzes Skincare & Corpo',
  description:
    'Descubra seu tipo de pele, procedimentos ideais e rotina de skincare personalizada. Quizzes interativos da Clínica da Fefe.',
};

export default function QuizzesPage() {
  return <Quizzes />;
}
