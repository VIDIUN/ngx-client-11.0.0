/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const KalturaPlayableEntryOrderBy = {
    createdAtAsc: '+createdAt',
    createdAtDesc: '-createdAt',
    durationAsc: '+duration',
    durationDesc: '-duration',
    endDateAsc: '+endDate',
    endDateDesc: '-endDate',
    lastPlayedAtAsc: '+lastPlayedAt',
    lastPlayedAtDesc: '-lastPlayedAt',
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
export { KalturaPlayableEntryOrderBy };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlhYmxlRW50cnlPcmRlckJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheWFibGVFbnRyeU9yZGVyQnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBR0ksY0FBZSxZQUFZO0lBQzlCLGVBQWdCLFlBQVk7SUFDNUIsYUFBYyxXQUFXO0lBQ3pCLGNBQWUsV0FBVztJQUMxQixZQUFhLFVBQVU7SUFDdkIsYUFBYyxVQUFVO0lBQ3hCLGlCQUFrQixlQUFlO0lBQ2pDLGtCQUFtQixlQUFlO0lBQ2xDLG9CQUFxQixrQkFBa0I7SUFDdkMscUJBQXNCLGtCQUFrQjtJQUN4QyxTQUFVLE9BQU87SUFDakIsVUFBVyxPQUFPO0lBQ2xCLHFCQUFzQixtQkFBbUI7SUFDekMsc0JBQXVCLG1CQUFtQjtJQUMxQyxVQUFXLFFBQVE7SUFDbkIsV0FBWSxRQUFRO0lBQ3BCLFNBQVUsT0FBTztJQUNqQixVQUFXLE9BQU87SUFDbEIsV0FBWSxTQUFTO0lBQ3JCLFlBQWEsU0FBUztJQUN0QixjQUFlLFlBQVk7SUFDM0IsZUFBZ0IsWUFBWTtJQUM1QixjQUFlLFlBQVk7SUFDM0IsZUFBZ0IsWUFBWTtJQUM1QixjQUFlLFlBQVk7SUFDM0IsZUFBZ0IsWUFBWTtJQUM1QixVQUFXLFFBQVE7SUFDbkIsV0FBWSxRQUFRO0lBQ3BCLFdBQVksU0FBUztJQUNyQixZQUFhLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGVudW0gS2FsdHVyYVBsYXlhYmxlRW50cnlPcmRlckJ5IHtcbiAgICBjcmVhdGVkQXRBc2MgPSAnK2NyZWF0ZWRBdCcsXG5cdGNyZWF0ZWRBdERlc2MgPSAnLWNyZWF0ZWRBdCcsXG5cdGR1cmF0aW9uQXNjID0gJytkdXJhdGlvbicsXG5cdGR1cmF0aW9uRGVzYyA9ICctZHVyYXRpb24nLFxuXHRlbmREYXRlQXNjID0gJytlbmREYXRlJyxcblx0ZW5kRGF0ZURlc2MgPSAnLWVuZERhdGUnLFxuXHRsYXN0UGxheWVkQXRBc2MgPSAnK2xhc3RQbGF5ZWRBdCcsXG5cdGxhc3RQbGF5ZWRBdERlc2MgPSAnLWxhc3RQbGF5ZWRBdCcsXG5cdG1vZGVyYXRpb25Db3VudEFzYyA9ICcrbW9kZXJhdGlvbkNvdW50Jyxcblx0bW9kZXJhdGlvbkNvdW50RGVzYyA9ICctbW9kZXJhdGlvbkNvdW50Jyxcblx0bmFtZUFzYyA9ICcrbmFtZScsXG5cdG5hbWVEZXNjID0gJy1uYW1lJyxcblx0cGFydG5lclNvcnRWYWx1ZUFzYyA9ICcrcGFydG5lclNvcnRWYWx1ZScsXG5cdHBhcnRuZXJTb3J0VmFsdWVEZXNjID0gJy1wYXJ0bmVyU29ydFZhbHVlJyxcblx0cGxheXNBc2MgPSAnK3BsYXlzJyxcblx0cGxheXNEZXNjID0gJy1wbGF5cycsXG5cdHJhbmtBc2MgPSAnK3JhbmsnLFxuXHRyYW5rRGVzYyA9ICctcmFuaycsXG5cdHJlY2VudEFzYyA9ICcrcmVjZW50Jyxcblx0cmVjZW50RGVzYyA9ICctcmVjZW50Jyxcblx0c3RhcnREYXRlQXNjID0gJytzdGFydERhdGUnLFxuXHRzdGFydERhdGVEZXNjID0gJy1zdGFydERhdGUnLFxuXHR0b3RhbFJhbmtBc2MgPSAnK3RvdGFsUmFuaycsXG5cdHRvdGFsUmFua0Rlc2MgPSAnLXRvdGFsUmFuaycsXG5cdHVwZGF0ZWRBdEFzYyA9ICcrdXBkYXRlZEF0Jyxcblx0dXBkYXRlZEF0RGVzYyA9ICctdXBkYXRlZEF0Jyxcblx0dmlld3NBc2MgPSAnK3ZpZXdzJyxcblx0dmlld3NEZXNjID0gJy12aWV3cycsXG5cdHdlaWdodEFzYyA9ICcrd2VpZ2h0Jyxcblx0d2VpZ2h0RGVzYyA9ICctd2VpZ2h0J1xufSJdfQ==