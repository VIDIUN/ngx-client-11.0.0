/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var KalturaAuditTrailObjectType = {
    accessControl: 'accessControl',
    batchJob: 'BatchJob',
    category: 'category',
    conversionProfile2: 'conversionProfile2',
    emailIngestionProfile: 'EmailIngestionProfile',
    entry: 'entry',
    fileSync: 'FileSync',
    flavorAsset: 'flavorAsset',
    flavorParams: 'flavorParams',
    flavorParamsConversionProfile: 'flavorParamsConversionProfile',
    flavorParamsOutput: 'flavorParamsOutput',
    kshow: 'kshow',
    kshowKuser: 'KshowKuser',
    kuser: 'kuser',
    mediaInfo: 'mediaInfo',
    metadata: 'Metadata',
    metadataProfile: 'MetadataProfile',
    moderation: 'moderation',
    partner: 'Partner',
    permission: 'Permission',
    roughcut: 'roughcutEntry',
    syndication: 'syndicationFeed',
    thumbnailAsset: 'thumbAsset',
    thumbnailParams: 'thumbParams',
    thumbnailParamsOutput: 'thumbParamsOutput',
    uiConf: 'uiConf',
    uploadToken: 'UploadToken',
    userLoginData: 'UserLoginData',
    userRole: 'UserRole',
    widget: 'widget',
};
export { KalturaAuditTrailObjectType };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxPYmplY3RUeXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBR0ksZUFBZ0IsZUFBZTtJQUNsQyxVQUFXLFVBQVU7SUFDckIsVUFBVyxVQUFVO0lBQ3JCLG9CQUFxQixvQkFBb0I7SUFDekMsdUJBQXdCLHVCQUF1QjtJQUMvQyxPQUFRLE9BQU87SUFDZixVQUFXLFVBQVU7SUFDckIsYUFBYyxhQUFhO0lBQzNCLGNBQWUsY0FBYztJQUM3QiwrQkFBZ0MsK0JBQStCO0lBQy9ELG9CQUFxQixvQkFBb0I7SUFDekMsT0FBUSxPQUFPO0lBQ2YsWUFBYSxZQUFZO0lBQ3pCLE9BQVEsT0FBTztJQUNmLFdBQVksV0FBVztJQUN2QixVQUFXLFVBQVU7SUFDckIsaUJBQWtCLGlCQUFpQjtJQUNuQyxZQUFhLFlBQVk7SUFDekIsU0FBVSxTQUFTO0lBQ25CLFlBQWEsWUFBWTtJQUN6QixVQUFXLGVBQWU7SUFDMUIsYUFBYyxpQkFBaUI7SUFDL0IsZ0JBQWlCLFlBQVk7SUFDN0IsaUJBQWtCLGFBQWE7SUFDL0IsdUJBQXdCLG1CQUFtQjtJQUMzQyxRQUFTLFFBQVE7SUFDakIsYUFBYyxhQUFhO0lBQzNCLGVBQWdCLGVBQWU7SUFDL0IsVUFBVyxVQUFVO0lBQ3JCLFFBQVMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZW51bSBLYWx0dXJhQXVkaXRUcmFpbE9iamVjdFR5cGUge1xuICAgIGFjY2Vzc0NvbnRyb2wgPSAnYWNjZXNzQ29udHJvbCcsXG5cdGJhdGNoSm9iID0gJ0JhdGNoSm9iJyxcblx0Y2F0ZWdvcnkgPSAnY2F0ZWdvcnknLFxuXHRjb252ZXJzaW9uUHJvZmlsZTIgPSAnY29udmVyc2lvblByb2ZpbGUyJyxcblx0ZW1haWxJbmdlc3Rpb25Qcm9maWxlID0gJ0VtYWlsSW5nZXN0aW9uUHJvZmlsZScsXG5cdGVudHJ5ID0gJ2VudHJ5Jyxcblx0ZmlsZVN5bmMgPSAnRmlsZVN5bmMnLFxuXHRmbGF2b3JBc3NldCA9ICdmbGF2b3JBc3NldCcsXG5cdGZsYXZvclBhcmFtcyA9ICdmbGF2b3JQYXJhbXMnLFxuXHRmbGF2b3JQYXJhbXNDb252ZXJzaW9uUHJvZmlsZSA9ICdmbGF2b3JQYXJhbXNDb252ZXJzaW9uUHJvZmlsZScsXG5cdGZsYXZvclBhcmFtc091dHB1dCA9ICdmbGF2b3JQYXJhbXNPdXRwdXQnLFxuXHRrc2hvdyA9ICdrc2hvdycsXG5cdGtzaG93S3VzZXIgPSAnS3Nob3dLdXNlcicsXG5cdGt1c2VyID0gJ2t1c2VyJyxcblx0bWVkaWFJbmZvID0gJ21lZGlhSW5mbycsXG5cdG1ldGFkYXRhID0gJ01ldGFkYXRhJyxcblx0bWV0YWRhdGFQcm9maWxlID0gJ01ldGFkYXRhUHJvZmlsZScsXG5cdG1vZGVyYXRpb24gPSAnbW9kZXJhdGlvbicsXG5cdHBhcnRuZXIgPSAnUGFydG5lcicsXG5cdHBlcm1pc3Npb24gPSAnUGVybWlzc2lvbicsXG5cdHJvdWdoY3V0ID0gJ3JvdWdoY3V0RW50cnknLFxuXHRzeW5kaWNhdGlvbiA9ICdzeW5kaWNhdGlvbkZlZWQnLFxuXHR0aHVtYm5haWxBc3NldCA9ICd0aHVtYkFzc2V0Jyxcblx0dGh1bWJuYWlsUGFyYW1zID0gJ3RodW1iUGFyYW1zJyxcblx0dGh1bWJuYWlsUGFyYW1zT3V0cHV0ID0gJ3RodW1iUGFyYW1zT3V0cHV0Jyxcblx0dWlDb25mID0gJ3VpQ29uZicsXG5cdHVwbG9hZFRva2VuID0gJ1VwbG9hZFRva2VuJyxcblx0dXNlckxvZ2luRGF0YSA9ICdVc2VyTG9naW5EYXRhJyxcblx0dXNlclJvbGUgPSAnVXNlclJvbGUnLFxuXHR3aWRnZXQgPSAnd2lkZ2V0J1xufSJdfQ==