import { canvases } from './http';

// 목록
export function getCanvases(params) {
  return canvases.get('/', { params });
}

// 저장, 수정, 삭제
