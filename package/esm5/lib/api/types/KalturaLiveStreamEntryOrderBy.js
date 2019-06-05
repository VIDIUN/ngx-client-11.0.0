/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var KalturaLiveStreamEntryOrderBy = {
    createdAtAsc: '+createdAt',
    createdAtDesc: '-createdAt',
    durationAsc: '+duration',
    durationDesc: '-duration',
    endDateAsc: '+endDate',
    endDateDesc: '-endDate',
    firstBroadcastAsc: '+firstBroadcast',
    firstBroadcastDesc: '-firstBroadcast',
    lastBroadcastAsc: '+lastBroadcast',
    lastBroadcastDesc: '-lastBroadcast',
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
export { KalturaLiveStreamEntryOrderBy };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1FbnRyeU9yZGVyQnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlU3RyZWFtRW50cnlPcmRlckJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUdJLGNBQWUsWUFBWTtJQUM5QixlQUFnQixZQUFZO0lBQzVCLGFBQWMsV0FBVztJQUN6QixjQUFlLFdBQVc7SUFDMUIsWUFBYSxVQUFVO0lBQ3ZCLGFBQWMsVUFBVTtJQUN4QixtQkFBb0IsaUJBQWlCO0lBQ3JDLG9CQUFxQixpQkFBaUI7SUFDdEMsa0JBQW1CLGdCQUFnQjtJQUNuQyxtQkFBb0IsZ0JBQWdCO0lBQ3BDLGlCQUFrQixlQUFlO0lBQ2pDLGtCQUFtQixlQUFlO0lBQ2xDLGNBQWUsWUFBWTtJQUMzQixlQUFnQixZQUFZO0lBQzVCLG9CQUFxQixrQkFBa0I7SUFDdkMscUJBQXNCLGtCQUFrQjtJQUN4QyxTQUFVLE9BQU87SUFDakIsVUFBVyxPQUFPO0lBQ2xCLHFCQUFzQixtQkFBbUI7SUFDekMsc0JBQXVCLG1CQUFtQjtJQUMxQyxVQUFXLFFBQVE7SUFDbkIsV0FBWSxRQUFRO0lBQ3BCLFNBQVUsT0FBTztJQUNqQixVQUFXLE9BQU87SUFDbEIsV0FBWSxTQUFTO0lBQ3JCLFlBQWEsU0FBUztJQUN0QixjQUFlLFlBQVk7SUFDM0IsZUFBZ0IsWUFBWTtJQUM1QixjQUFlLFlBQVk7SUFDM0IsZUFBZ0IsWUFBWTtJQUM1QixjQUFlLFlBQVk7SUFDM0IsZUFBZ0IsWUFBWTtJQUM1QixVQUFXLFFBQVE7SUFDbkIsV0FBWSxRQUFRO0lBQ3BCLFdBQVksU0FBUztJQUNyQixZQUFhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGVudW0gS2FsdHVyYUxpdmVTdHJlYW1FbnRyeU9yZGVyQnkge1xuICAgIGNyZWF0ZWRBdEFzYyA9ICcrY3JlYXRlZEF0Jyxcblx0Y3JlYXRlZEF0RGVzYyA9ICctY3JlYXRlZEF0Jyxcblx0ZHVyYXRpb25Bc2MgPSAnK2R1cmF0aW9uJyxcblx0ZHVyYXRpb25EZXNjID0gJy1kdXJhdGlvbicsXG5cdGVuZERhdGVBc2MgPSAnK2VuZERhdGUnLFxuXHRlbmREYXRlRGVzYyA9ICctZW5kRGF0ZScsXG5cdGZpcnN0QnJvYWRjYXN0QXNjID0gJytmaXJzdEJyb2FkY2FzdCcsXG5cdGZpcnN0QnJvYWRjYXN0RGVzYyA9ICctZmlyc3RCcm9hZGNhc3QnLFxuXHRsYXN0QnJvYWRjYXN0QXNjID0gJytsYXN0QnJvYWRjYXN0Jyxcblx0bGFzdEJyb2FkY2FzdERlc2MgPSAnLWxhc3RCcm9hZGNhc3QnLFxuXHRsYXN0UGxheWVkQXRBc2MgPSAnK2xhc3RQbGF5ZWRBdCcsXG5cdGxhc3RQbGF5ZWRBdERlc2MgPSAnLWxhc3RQbGF5ZWRBdCcsXG5cdG1lZGlhVHlwZUFzYyA9ICcrbWVkaWFUeXBlJyxcblx0bWVkaWFUeXBlRGVzYyA9ICctbWVkaWFUeXBlJyxcblx0bW9kZXJhdGlvbkNvdW50QXNjID0gJyttb2RlcmF0aW9uQ291bnQnLFxuXHRtb2RlcmF0aW9uQ291bnREZXNjID0gJy1tb2RlcmF0aW9uQ291bnQnLFxuXHRuYW1lQXNjID0gJytuYW1lJyxcblx0bmFtZURlc2MgPSAnLW5hbWUnLFxuXHRwYXJ0bmVyU29ydFZhbHVlQXNjID0gJytwYXJ0bmVyU29ydFZhbHVlJyxcblx0cGFydG5lclNvcnRWYWx1ZURlc2MgPSAnLXBhcnRuZXJTb3J0VmFsdWUnLFxuXHRwbGF5c0FzYyA9ICcrcGxheXMnLFxuXHRwbGF5c0Rlc2MgPSAnLXBsYXlzJyxcblx0cmFua0FzYyA9ICcrcmFuaycsXG5cdHJhbmtEZXNjID0gJy1yYW5rJyxcblx0cmVjZW50QXNjID0gJytyZWNlbnQnLFxuXHRyZWNlbnREZXNjID0gJy1yZWNlbnQnLFxuXHRzdGFydERhdGVBc2MgPSAnK3N0YXJ0RGF0ZScsXG5cdHN0YXJ0RGF0ZURlc2MgPSAnLXN0YXJ0RGF0ZScsXG5cdHRvdGFsUmFua0FzYyA9ICcrdG90YWxSYW5rJyxcblx0dG90YWxSYW5rRGVzYyA9ICctdG90YWxSYW5rJyxcblx0dXBkYXRlZEF0QXNjID0gJyt1cGRhdGVkQXQnLFxuXHR1cGRhdGVkQXREZXNjID0gJy11cGRhdGVkQXQnLFxuXHR2aWV3c0FzYyA9ICcrdmlld3MnLFxuXHR2aWV3c0Rlc2MgPSAnLXZpZXdzJyxcblx0d2VpZ2h0QXNjID0gJyt3ZWlnaHQnLFxuXHR3ZWlnaHREZXNjID0gJy13ZWlnaHQnXG59Il19