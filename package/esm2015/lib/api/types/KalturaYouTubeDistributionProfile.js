/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaYouTubeDistributionFeedSpecVersion } from './KalturaYouTubeDistributionFeedSpecVersion';
import { KalturaConfigurableDistributionProfile } from './KalturaConfigurableDistributionProfile';
/**
 * @record
 */
export function KalturaYouTubeDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.feedSpecVersion;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.username;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.notificationEmail;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.sftpHost;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.sftpPort;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.sftpLogin;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.sftpPublicKey;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.sftpPrivateKey;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.sftpBaseDir;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.ownerName;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.defaultCategory;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowComments;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowEmbedding;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowRatings;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowResponses;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.commercialPolicy;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.ugcPolicy;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.target;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.adServerPartnerId;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.enableAdServer;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowPreRollAds;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowPostRollAds;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.strict;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.overrideManualEdits;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.urgentReference;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowSyndication;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.hideViewCount;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowAdsenseForVideo;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowInvideo;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.allowMidRollAds;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.instreamStandard;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.instreamTrueview;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.claimType;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.blockOutsideOwnership;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.captionAutosync;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.deleteReference;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.releaseClaims;
/** @type {?|undefined} */
KalturaYouTubeDistributionProfileArgs.prototype.apiAuthorizeUrl;
export class KalturaYouTubeDistributionProfile extends KalturaConfigurableDistributionProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaYouTubeDistributionProfile' },
            feedSpecVersion: { type: 'es', subTypeConstructor: KalturaYouTubeDistributionFeedSpecVersion, subType: 'KalturaYouTubeDistributionFeedSpecVersion' },
            username: { type: 's' },
            notificationEmail: { type: 's' },
            sftpHost: { type: 's' },
            sftpPort: { type: 'n' },
            sftpLogin: { type: 's' },
            sftpPublicKey: { type: 's' },
            sftpPrivateKey: { type: 's' },
            sftpBaseDir: { type: 's' },
            ownerName: { type: 's' },
            defaultCategory: { type: 's' },
            allowComments: { type: 's' },
            allowEmbedding: { type: 's' },
            allowRatings: { type: 's' },
            allowResponses: { type: 's' },
            commercialPolicy: { type: 's' },
            ugcPolicy: { type: 's' },
            target: { type: 's' },
            adServerPartnerId: { type: 's' },
            enableAdServer: { type: 'b' },
            allowPreRollAds: { type: 'b' },
            allowPostRollAds: { type: 'b' },
            strict: { type: 's' },
            overrideManualEdits: { type: 's' },
            urgentReference: { type: 's' },
            allowSyndication: { type: 's' },
            hideViewCount: { type: 's' },
            allowAdsenseForVideo: { type: 's' },
            allowInvideo: { type: 's' },
            allowMidRollAds: { type: 'b' },
            instreamStandard: { type: 's' },
            instreamTrueview: { type: 's' },
            claimType: { type: 's' },
            blockOutsideOwnership: { type: 's' },
            captionAutosync: { type: 's' },
            deleteReference: { type: 'b' },
            releaseClaims: { type: 'b' },
            apiAuthorizeUrl: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.feedSpecVersion;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.username;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.notificationEmail;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.sftpHost;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.sftpPort;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.sftpLogin;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.sftpPublicKey;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.sftpPrivateKey;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.sftpBaseDir;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.ownerName;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.defaultCategory;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowComments;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowEmbedding;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowRatings;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowResponses;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.commercialPolicy;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.ugcPolicy;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.target;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.adServerPartnerId;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.enableAdServer;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowPreRollAds;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowPostRollAds;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.strict;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.overrideManualEdits;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.urgentReference;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowSyndication;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.hideViewCount;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowAdsenseForVideo;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowInvideo;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.allowMidRollAds;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.instreamStandard;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.instreamTrueview;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.claimType;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.blockOutsideOwnership;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.captionAutosync;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.deleteReference;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.releaseClaims;
    /** @type {?} */
    KalturaYouTubeDistributionProfile.prototype.apiAuthorizeUrl;
}
typesMappingStorage['KalturaYouTubeDistributionProfile'] = KalturaYouTubeDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDOUksTUFBTSx3Q0FBeUMsU0FBUSxzQ0FBc0M7Ozs7SUF5Q3pGLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUNBQXlDLEVBQUUsT0FBTyxFQUFHLDJDQUEyQyxFQUFFO1lBQ3hKLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uRmVlZFNwZWNWZXJzaW9uIH0gZnJvbSAnLi9LYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvbkZlZWRTcGVjVmVyc2lvbic7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGZlZWRTcGVjVmVyc2lvbj8gOiBLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvbkZlZWRTcGVjVmVyc2lvbjtcblx0dXNlcm5hbWU/IDogc3RyaW5nO1xuXHRub3RpZmljYXRpb25FbWFpbD8gOiBzdHJpbmc7XG5cdHNmdHBIb3N0PyA6IHN0cmluZztcblx0c2Z0cFBvcnQ/IDogbnVtYmVyO1xuXHRzZnRwTG9naW4/IDogc3RyaW5nO1xuXHRzZnRwUHVibGljS2V5PyA6IHN0cmluZztcblx0c2Z0cFByaXZhdGVLZXk/IDogc3RyaW5nO1xuXHRzZnRwQmFzZURpcj8gOiBzdHJpbmc7XG5cdG93bmVyTmFtZT8gOiBzdHJpbmc7XG5cdGRlZmF1bHRDYXRlZ29yeT8gOiBzdHJpbmc7XG5cdGFsbG93Q29tbWVudHM/IDogc3RyaW5nO1xuXHRhbGxvd0VtYmVkZGluZz8gOiBzdHJpbmc7XG5cdGFsbG93UmF0aW5ncz8gOiBzdHJpbmc7XG5cdGFsbG93UmVzcG9uc2VzPyA6IHN0cmluZztcblx0Y29tbWVyY2lhbFBvbGljeT8gOiBzdHJpbmc7XG5cdHVnY1BvbGljeT8gOiBzdHJpbmc7XG5cdHRhcmdldD8gOiBzdHJpbmc7XG5cdGFkU2VydmVyUGFydG5lcklkPyA6IHN0cmluZztcblx0ZW5hYmxlQWRTZXJ2ZXI/IDogYm9vbGVhbjtcblx0YWxsb3dQcmVSb2xsQWRzPyA6IGJvb2xlYW47XG5cdGFsbG93UG9zdFJvbGxBZHM/IDogYm9vbGVhbjtcblx0c3RyaWN0PyA6IHN0cmluZztcblx0b3ZlcnJpZGVNYW51YWxFZGl0cz8gOiBzdHJpbmc7XG5cdHVyZ2VudFJlZmVyZW5jZT8gOiBzdHJpbmc7XG5cdGFsbG93U3luZGljYXRpb24/IDogc3RyaW5nO1xuXHRoaWRlVmlld0NvdW50PyA6IHN0cmluZztcblx0YWxsb3dBZHNlbnNlRm9yVmlkZW8/IDogc3RyaW5nO1xuXHRhbGxvd0ludmlkZW8/IDogc3RyaW5nO1xuXHRhbGxvd01pZFJvbGxBZHM/IDogYm9vbGVhbjtcblx0aW5zdHJlYW1TdGFuZGFyZD8gOiBzdHJpbmc7XG5cdGluc3RyZWFtVHJ1ZXZpZXc/IDogc3RyaW5nO1xuXHRjbGFpbVR5cGU/IDogc3RyaW5nO1xuXHRibG9ja091dHNpZGVPd25lcnNoaXA/IDogc3RyaW5nO1xuXHRjYXB0aW9uQXV0b3N5bmM/IDogc3RyaW5nO1xuXHRkZWxldGVSZWZlcmVuY2U/IDogYm9vbGVhbjtcblx0cmVsZWFzZUNsYWltcz8gOiBib29sZWFuO1xuXHRhcGlBdXRob3JpemVVcmw/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBmZWVkU3BlY1ZlcnNpb24gOiBLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvbkZlZWRTcGVjVmVyc2lvbjtcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdG5vdGlmaWNhdGlvbkVtYWlsIDogc3RyaW5nO1xuXHRzZnRwSG9zdCA6IHN0cmluZztcblx0c2Z0cFBvcnQgOiBudW1iZXI7XG5cdHNmdHBMb2dpbiA6IHN0cmluZztcblx0c2Z0cFB1YmxpY0tleSA6IHN0cmluZztcblx0c2Z0cFByaXZhdGVLZXkgOiBzdHJpbmc7XG5cdHNmdHBCYXNlRGlyIDogc3RyaW5nO1xuXHRvd25lck5hbWUgOiBzdHJpbmc7XG5cdGRlZmF1bHRDYXRlZ29yeSA6IHN0cmluZztcblx0YWxsb3dDb21tZW50cyA6IHN0cmluZztcblx0YWxsb3dFbWJlZGRpbmcgOiBzdHJpbmc7XG5cdGFsbG93UmF0aW5ncyA6IHN0cmluZztcblx0YWxsb3dSZXNwb25zZXMgOiBzdHJpbmc7XG5cdGNvbW1lcmNpYWxQb2xpY3kgOiBzdHJpbmc7XG5cdHVnY1BvbGljeSA6IHN0cmluZztcblx0dGFyZ2V0IDogc3RyaW5nO1xuXHRhZFNlcnZlclBhcnRuZXJJZCA6IHN0cmluZztcblx0ZW5hYmxlQWRTZXJ2ZXIgOiBib29sZWFuO1xuXHRhbGxvd1ByZVJvbGxBZHMgOiBib29sZWFuO1xuXHRhbGxvd1Bvc3RSb2xsQWRzIDogYm9vbGVhbjtcblx0c3RyaWN0IDogc3RyaW5nO1xuXHRvdmVycmlkZU1hbnVhbEVkaXRzIDogc3RyaW5nO1xuXHR1cmdlbnRSZWZlcmVuY2UgOiBzdHJpbmc7XG5cdGFsbG93U3luZGljYXRpb24gOiBzdHJpbmc7XG5cdGhpZGVWaWV3Q291bnQgOiBzdHJpbmc7XG5cdGFsbG93QWRzZW5zZUZvclZpZGVvIDogc3RyaW5nO1xuXHRhbGxvd0ludmlkZW8gOiBzdHJpbmc7XG5cdGFsbG93TWlkUm9sbEFkcyA6IGJvb2xlYW47XG5cdGluc3RyZWFtU3RhbmRhcmQgOiBzdHJpbmc7XG5cdGluc3RyZWFtVHJ1ZXZpZXcgOiBzdHJpbmc7XG5cdGNsYWltVHlwZSA6IHN0cmluZztcblx0YmxvY2tPdXRzaWRlT3duZXJzaGlwIDogc3RyaW5nO1xuXHRjYXB0aW9uQXV0b3N5bmMgOiBzdHJpbmc7XG5cdGRlbGV0ZVJlZmVyZW5jZSA6IGJvb2xlYW47XG5cdHJlbGVhc2VDbGFpbXMgOiBib29sZWFuO1xuXHRhcGlBdXRob3JpemVVcmwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGZlZWRTcGVjVmVyc2lvbiA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uRmVlZFNwZWNWZXJzaW9uLCBzdWJUeXBlIDogJ0thbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uRmVlZFNwZWNWZXJzaW9uJyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRub3RpZmljYXRpb25FbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwSG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwUG9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzZnRwTG9naW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Z0cFB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwUHJpdmF0ZUtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwQmFzZURpciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvd25lck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdENhdGVnb3J5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93Q29tbWVudHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dFbWJlZGRpbmcgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dSYXRpbmdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93UmVzcG9uc2VzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbW1lcmNpYWxQb2xpY3kgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dWdjUG9saWN5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhcmdldCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhZFNlcnZlclBhcnRuZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmFibGVBZFNlcnZlciA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhbGxvd1ByZVJvbGxBZHMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YWxsb3dQb3N0Um9sbEFkcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzdHJpY3QgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3ZlcnJpZGVNYW51YWxFZGl0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cmdlbnRSZWZlcmVuY2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dTeW5kaWNhdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRoaWRlVmlld0NvdW50IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93QWRzZW5zZUZvclZpZGVvIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93SW52aWRlbyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbGxvd01pZFJvbGxBZHMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0aW5zdHJlYW1TdGFuZGFyZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpbnN0cmVhbVRydWV2aWV3IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNsYWltVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRibG9ja091dHNpZGVPd25lcnNoaXAgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FwdGlvbkF1dG9zeW5jIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlbGV0ZVJlZmVyZW5jZSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRyZWxlYXNlQ2xhaW1zIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGFwaUF1dGhvcml6ZVVybCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=