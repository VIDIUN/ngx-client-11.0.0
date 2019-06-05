/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaYouTubeDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaYouTubeDistributionProfile, _super);
    function KalturaYouTubeDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaYouTubeDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaYouTubeDistributionProfile;
}(KalturaConfigurableDistributionProfile));
export { KalturaYouTubeDistributionProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLHNDQUFzQyxFQUE4QyxNQUFNLDBDQUEwQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QzlJLElBQUE7SUFBdUQsNkRBQXNDO0lBeUN6RiwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUNBQXlDLEVBQUUsT0FBTyxFQUFHLDJDQUEyQyxFQUFFO1lBQ3hKLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQTdJTDtFQStDdUQsc0NBQXNDLEVBK0Y1RixDQUFBO0FBL0ZELDZDQStGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25GZWVkU3BlY1ZlcnNpb24gfSBmcm9tICcuL0thbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uRmVlZFNwZWNWZXJzaW9uJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgZmVlZFNwZWNWZXJzaW9uPyA6IEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uRmVlZFNwZWNWZXJzaW9uO1xuXHR1c2VybmFtZT8gOiBzdHJpbmc7XG5cdG5vdGlmaWNhdGlvbkVtYWlsPyA6IHN0cmluZztcblx0c2Z0cEhvc3Q/IDogc3RyaW5nO1xuXHRzZnRwUG9ydD8gOiBudW1iZXI7XG5cdHNmdHBMb2dpbj8gOiBzdHJpbmc7XG5cdHNmdHBQdWJsaWNLZXk/IDogc3RyaW5nO1xuXHRzZnRwUHJpdmF0ZUtleT8gOiBzdHJpbmc7XG5cdHNmdHBCYXNlRGlyPyA6IHN0cmluZztcblx0b3duZXJOYW1lPyA6IHN0cmluZztcblx0ZGVmYXVsdENhdGVnb3J5PyA6IHN0cmluZztcblx0YWxsb3dDb21tZW50cz8gOiBzdHJpbmc7XG5cdGFsbG93RW1iZWRkaW5nPyA6IHN0cmluZztcblx0YWxsb3dSYXRpbmdzPyA6IHN0cmluZztcblx0YWxsb3dSZXNwb25zZXM/IDogc3RyaW5nO1xuXHRjb21tZXJjaWFsUG9saWN5PyA6IHN0cmluZztcblx0dWdjUG9saWN5PyA6IHN0cmluZztcblx0dGFyZ2V0PyA6IHN0cmluZztcblx0YWRTZXJ2ZXJQYXJ0bmVySWQ/IDogc3RyaW5nO1xuXHRlbmFibGVBZFNlcnZlcj8gOiBib29sZWFuO1xuXHRhbGxvd1ByZVJvbGxBZHM/IDogYm9vbGVhbjtcblx0YWxsb3dQb3N0Um9sbEFkcz8gOiBib29sZWFuO1xuXHRzdHJpY3Q/IDogc3RyaW5nO1xuXHRvdmVycmlkZU1hbnVhbEVkaXRzPyA6IHN0cmluZztcblx0dXJnZW50UmVmZXJlbmNlPyA6IHN0cmluZztcblx0YWxsb3dTeW5kaWNhdGlvbj8gOiBzdHJpbmc7XG5cdGhpZGVWaWV3Q291bnQ/IDogc3RyaW5nO1xuXHRhbGxvd0Fkc2Vuc2VGb3JWaWRlbz8gOiBzdHJpbmc7XG5cdGFsbG93SW52aWRlbz8gOiBzdHJpbmc7XG5cdGFsbG93TWlkUm9sbEFkcz8gOiBib29sZWFuO1xuXHRpbnN0cmVhbVN0YW5kYXJkPyA6IHN0cmluZztcblx0aW5zdHJlYW1UcnVldmlldz8gOiBzdHJpbmc7XG5cdGNsYWltVHlwZT8gOiBzdHJpbmc7XG5cdGJsb2NrT3V0c2lkZU93bmVyc2hpcD8gOiBzdHJpbmc7XG5cdGNhcHRpb25BdXRvc3luYz8gOiBzdHJpbmc7XG5cdGRlbGV0ZVJlZmVyZW5jZT8gOiBib29sZWFuO1xuXHRyZWxlYXNlQ2xhaW1zPyA6IGJvb2xlYW47XG5cdGFwaUF1dGhvcml6ZVVybD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvZmlsZSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIHtcblxuICAgIGZlZWRTcGVjVmVyc2lvbiA6IEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uRmVlZFNwZWNWZXJzaW9uO1xuXHR1c2VybmFtZSA6IHN0cmluZztcblx0bm90aWZpY2F0aW9uRW1haWwgOiBzdHJpbmc7XG5cdHNmdHBIb3N0IDogc3RyaW5nO1xuXHRzZnRwUG9ydCA6IG51bWJlcjtcblx0c2Z0cExvZ2luIDogc3RyaW5nO1xuXHRzZnRwUHVibGljS2V5IDogc3RyaW5nO1xuXHRzZnRwUHJpdmF0ZUtleSA6IHN0cmluZztcblx0c2Z0cEJhc2VEaXIgOiBzdHJpbmc7XG5cdG93bmVyTmFtZSA6IHN0cmluZztcblx0ZGVmYXVsdENhdGVnb3J5IDogc3RyaW5nO1xuXHRhbGxvd0NvbW1lbnRzIDogc3RyaW5nO1xuXHRhbGxvd0VtYmVkZGluZyA6IHN0cmluZztcblx0YWxsb3dSYXRpbmdzIDogc3RyaW5nO1xuXHRhbGxvd1Jlc3BvbnNlcyA6IHN0cmluZztcblx0Y29tbWVyY2lhbFBvbGljeSA6IHN0cmluZztcblx0dWdjUG9saWN5IDogc3RyaW5nO1xuXHR0YXJnZXQgOiBzdHJpbmc7XG5cdGFkU2VydmVyUGFydG5lcklkIDogc3RyaW5nO1xuXHRlbmFibGVBZFNlcnZlciA6IGJvb2xlYW47XG5cdGFsbG93UHJlUm9sbEFkcyA6IGJvb2xlYW47XG5cdGFsbG93UG9zdFJvbGxBZHMgOiBib29sZWFuO1xuXHRzdHJpY3QgOiBzdHJpbmc7XG5cdG92ZXJyaWRlTWFudWFsRWRpdHMgOiBzdHJpbmc7XG5cdHVyZ2VudFJlZmVyZW5jZSA6IHN0cmluZztcblx0YWxsb3dTeW5kaWNhdGlvbiA6IHN0cmluZztcblx0aGlkZVZpZXdDb3VudCA6IHN0cmluZztcblx0YWxsb3dBZHNlbnNlRm9yVmlkZW8gOiBzdHJpbmc7XG5cdGFsbG93SW52aWRlbyA6IHN0cmluZztcblx0YWxsb3dNaWRSb2xsQWRzIDogYm9vbGVhbjtcblx0aW5zdHJlYW1TdGFuZGFyZCA6IHN0cmluZztcblx0aW5zdHJlYW1UcnVldmlldyA6IHN0cmluZztcblx0Y2xhaW1UeXBlIDogc3RyaW5nO1xuXHRibG9ja091dHNpZGVPd25lcnNoaXAgOiBzdHJpbmc7XG5cdGNhcHRpb25BdXRvc3luYyA6IHN0cmluZztcblx0ZGVsZXRlUmVmZXJlbmNlIDogYm9vbGVhbjtcblx0cmVsZWFzZUNsYWltcyA6IGJvb2xlYW47XG5cdGFwaUF1dGhvcml6ZVVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0ZmVlZFNwZWNWZXJzaW9uIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25GZWVkU3BlY1ZlcnNpb24sIHN1YlR5cGUgOiAnS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25GZWVkU3BlY1ZlcnNpb24nIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5vdGlmaWNhdGlvbkVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBIb3N0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBQb3J0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNmdHBMb2dpbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZnRwUHVibGljS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBQcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBCYXNlRGlyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG93bmVyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0Q2F0ZWdvcnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dDb21tZW50cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbGxvd0VtYmVkZGluZyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbGxvd1JhdGluZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dSZXNwb25zZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29tbWVyY2lhbFBvbGljeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1Z2NQb2xpY3kgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFyZ2V0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFkU2VydmVyUGFydG5lcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuYWJsZUFkU2VydmVyIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGFsbG93UHJlUm9sbEFkcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhbGxvd1Bvc3RSb2xsQWRzIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHN0cmljdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvdmVycmlkZU1hbnVhbEVkaXRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVyZ2VudFJlZmVyZW5jZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhbGxvd1N5bmRpY2F0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhpZGVWaWV3Q291bnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dBZHNlbnNlRm9yVmlkZW8gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YWxsb3dJbnZpZGVvIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFsbG93TWlkUm9sbEFkcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRpbnN0cmVhbVN0YW5kYXJkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGluc3RyZWFtVHJ1ZXZpZXcgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2xhaW1UeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJsb2NrT3V0c2lkZU93bmVyc2hpcCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXV0b3N5bmMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVsZXRlUmVmZXJlbmNlIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHJlbGVhc2VDbGFpbXMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YXBpQXV0aG9yaXplVXJsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uUHJvZmlsZSddID0gS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==