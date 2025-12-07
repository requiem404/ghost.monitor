export const ghostKeys = {
  all: ['spirits'] as const,
  details: () => [...ghostKeys.all, 'detail'] as const,
  detail: (id: string) => [...ghostKeys.details(), id] as const,
};
