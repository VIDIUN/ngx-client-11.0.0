/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const KalturaExternalMediaEntryOrderBy = {
    createdAtAsc: '+createdAt',
    createdAtDesc: '-createdAt',
    durationAsc: '+duration',
    durationDesc: '-duration',
    endDateAsc: '+endDate',
    endDateDesc: '-endDate',
    lastPlayedAtAsc: '+lastPlayedAt',
    lastPlayedAtDesc: '-lastPlayedAt',
    mediaTypeAsc: '+mediaType',
    mediaTypeDesc: '-mediaType',
    moderationCountAsc: '+moderationCount',
    moderationCountDesc: '-moderationCount',
    nameAsc: '+name',
    nameDesc: '-name',
    partnerSortValueAsc: '+partnerSortValue',
    partnerSortValueDesc: '-partnerSortValue',
    playsAsc: '+plays',
    playsDesc: '-plays',
    rankAsc: '+rank',
    rankDesc: '-rank',
    recentAsc: '+recent',
    recentDesc: '-recent',
    startDateAsc: '+startDate',
    startDateDesc: '-startDate',
    totalRankAsc: '+totalRank',
    totalRankDesc: '-totalRank',
    updatedAtAsc: '+updatedAt',
    updatedAtDesc: '-updatedAt',
    viewsAsc: '+views',
    viewsDesc: '-views',
    weightAsc: '+weight',
    weightDesc: '-weight',
};
export { KalturaExternalMediaEntryOrderBy };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeU9yZGVyQnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlPcmRlckJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdJLGNBQWUsWUFBWTtJQUM5QixlQUFnQixZQUFZO0lBQzVCLGFBQWMsV0FBVztJQUN6QixjQUFlLFdBQVc7SUFDMUIsWUFBYSxVQUFVO0lBQ3ZCLGFBQWMsVUFBVTtJQUN4QixpQkFBa0IsZUFBZTtJQUNqQyxrQkFBbUIsZUFBZTtJQUNsQyxjQUFlLFlBQVk7SUFDM0IsZUFBZ0IsWUFBWTtJQUM1QixvQkFBcUIsa0JBQWtCO0lBQ3ZDLHFCQUFzQixrQkFBa0I7SUFDeEMsU0FBVSxPQUFPO0lBQ2pCLFVBQVcsT0FBTztJQUNsQixxQkFBc0IsbUJBQW1CO0lBQ3pDLHNCQUF1QixtQkFBbUI7SUFDMUMsVUFBVyxRQUFRO0lBQ25CLFdBQVksUUFBUTtJQUNwQixTQUFVLE9BQU87SUFDakIsVUFBVyxPQUFPO0lBQ2xCLFdBQVksU0FBUztJQUNyQixZQUFhLFNBQVM7SUFDdEIsY0FBZSxZQUFZO0lBQzNCLGVBQWdCLFlBQVk7SUFDNUIsY0FBZSxZQUFZO0lBQzNCLGVBQWdCLFlBQVk7SUFDNUIsY0FBZSxZQUFZO0lBQzNCLGVBQWdCLFlBQVk7SUFDNUIsVUFBVyxRQUFRO0lBQ25CLFdBQVksUUFBUTtJQUNwQixXQUFZLFNBQVM7SUFDckIsWUFBYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBlbnVtIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlPcmRlckJ5IHtcbiAgICBjcmVhdGVkQXRBc2MgPSAnK2NyZWF0ZWRBdCcsXG5cdGNyZWF0ZWRBdERlc2MgPSAnLWNyZWF0ZWRBdCcsXG5cdGR1cmF0aW9uQXNjID0gJytkdXJhdGlvbicsXG5cdGR1cmF0aW9uRGVzYyA9ICctZHVyYXRpb24nLFxuXHRlbmREYXRlQXNjID0gJytlbmREYXRlJyxcblx0ZW5kRGF0ZURlc2MgPSAnLWVuZERhdGUnLFxuXHRsYXN0UGxheWVkQXRBc2MgPSAnK2xhc3RQbGF5ZWRBdCcsXG5cdGxhc3RQbGF5ZWRBdERlc2MgPSAnLWxhc3RQbGF5ZWRBdCcsXG5cdG1lZGlhVHlwZUFzYyA9ICcrbWVkaWFUeXBlJyxcblx0bWVkaWFUeXBlRGVzYyA9ICctbWVkaWFUeXBlJyxcblx0bW9kZXJhdGlvbkNvdW50QXNjID0gJyttb2RlcmF0aW9uQ291bnQnLFxuXHRtb2RlcmF0aW9uQ291bnREZXNjID0gJy1tb2RlcmF0aW9uQ291bnQnLFxuXHRuYW1lQXNjID0gJytuYW1lJyxcblx0bmFtZURlc2MgPSAnLW5hbWUnLFxuXHRwYXJ0bmVyU29ydFZhbHVlQXNjID0gJytwYXJ0bmVyU29ydFZhbHVlJyxcblx0cGFydG5lclNvcnRWYWx1ZURlc2MgPSAnLXBhcnRuZXJTb3J0VmFsdWUnLFxuXHRwbGF5c0FzYyA9ICcrcGxheXMnLFxuXHRwbGF5c0Rlc2MgPSAnLXBsYXlzJyxcblx0cmFua0FzYyA9ICcrcmFuaycsXG5cdHJhbmtEZXNjID0gJy1yYW5rJyxcblx0cmVjZW50QXNjID0gJytyZWNlbnQnLFxuXHRyZWNlbnREZXNjID0gJy1yZWNlbnQnLFxuXHRzdGFydERhdGVBc2MgPSAnK3N0YXJ0RGF0ZScsXG5cdHN0YXJ0RGF0ZURlc2MgPSAnLXN0YXJ0RGF0ZScsXG5cdHRvdGFsUmFua0FzYyA9ICcrdG90YWxSYW5rJyxcblx0dG90YWxSYW5rRGVzYyA9ICctdG90YWxSYW5rJyxcblx0dXBkYXRlZEF0QXNjID0gJyt1cGRhdGVkQXQnLFxuXHR1cGRhdGVkQXREZXNjID0gJy11cGRhdGVkQXQnLFxuXHR2aWV3c0FzYyA9ICcrdmlld3MnLFxuXHR2aWV3c0Rlc2MgPSAnLXZpZXdzJyxcblx0d2VpZ2h0QXNjID0gJyt3ZWlnaHQnLFxuXHR3ZWlnaHREZXNjID0gJy13ZWlnaHQnXG59Il19