/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaStorageJobDataArgs() { }
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.serverUrl;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.serverUsername;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.serverPassword;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.serverPrivateKey;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.serverPublicKey;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.serverPassPhrase;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.ftpPassiveMode;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.srcFileSyncLocalPath;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.srcFileEncryptionKey;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.srcFileSyncId;
/** @type {?|undefined} */
KalturaStorageJobDataArgs.prototype.destFileSyncStoredPath;
export class KalturaStorageJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaStorageJobData' },
            serverUrl: { type: 's' },
            serverUsername: { type: 's' },
            serverPassword: { type: 's' },
            serverPrivateKey: { type: 's' },
            serverPublicKey: { type: 's' },
            serverPassPhrase: { type: 's' },
            ftpPassiveMode: { type: 'b' },
            srcFileSyncLocalPath: { type: 's' },
            srcFileEncryptionKey: { type: 's' },
            srcFileSyncId: { type: 's' },
            destFileSyncStoredPath: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaStorageJobData.prototype.serverUrl;
    /** @type {?} */
    KalturaStorageJobData.prototype.serverUsername;
    /** @type {?} */
    KalturaStorageJobData.prototype.serverPassword;
    /** @type {?} */
    KalturaStorageJobData.prototype.serverPrivateKey;
    /** @type {?} */
    KalturaStorageJobData.prototype.serverPublicKey;
    /** @type {?} */
    KalturaStorageJobData.prototype.serverPassPhrase;
    /** @type {?} */
    KalturaStorageJobData.prototype.ftpPassiveMode;
    /** @type {?} */
    KalturaStorageJobData.prototype.srcFileSyncLocalPath;
    /** @type {?} */
    KalturaStorageJobData.prototype.srcFileEncryptionKey;
    /** @type {?} */
    KalturaStorageJobData.prototype.srcFileSyncId;
    /** @type {?} */
    KalturaStorageJobData.prototype.destFileSyncStoredPath;
}
typesMappingStorage['KalturaStorageJobData'] = KalturaStorageJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RvcmFnZUpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnRFLE1BQU0sNEJBQTZCLFNBQVEsY0FBYzs7OztJQWNyRCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzlCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTdG9yYWdlSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBzZXJ2ZXJVcmw/IDogc3RyaW5nO1xuXHRzZXJ2ZXJVc2VybmFtZT8gOiBzdHJpbmc7XG5cdHNlcnZlclBhc3N3b3JkPyA6IHN0cmluZztcblx0c2VydmVyUHJpdmF0ZUtleT8gOiBzdHJpbmc7XG5cdHNlcnZlclB1YmxpY0tleT8gOiBzdHJpbmc7XG5cdHNlcnZlclBhc3NQaHJhc2U/IDogc3RyaW5nO1xuXHRmdHBQYXNzaXZlTW9kZT8gOiBib29sZWFuO1xuXHRzcmNGaWxlU3luY0xvY2FsUGF0aD8gOiBzdHJpbmc7XG5cdHNyY0ZpbGVFbmNyeXB0aW9uS2V5PyA6IHN0cmluZztcblx0c3JjRmlsZVN5bmNJZD8gOiBzdHJpbmc7XG5cdGRlc3RGaWxlU3luY1N0b3JlZFBhdGg/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RvcmFnZUpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBzZXJ2ZXJVcmwgOiBzdHJpbmc7XG5cdHNlcnZlclVzZXJuYW1lIDogc3RyaW5nO1xuXHRzZXJ2ZXJQYXNzd29yZCA6IHN0cmluZztcblx0c2VydmVyUHJpdmF0ZUtleSA6IHN0cmluZztcblx0c2VydmVyUHVibGljS2V5IDogc3RyaW5nO1xuXHRzZXJ2ZXJQYXNzUGhyYXNlIDogc3RyaW5nO1xuXHRmdHBQYXNzaXZlTW9kZSA6IGJvb2xlYW47XG5cdHNyY0ZpbGVTeW5jTG9jYWxQYXRoIDogc3RyaW5nO1xuXHRzcmNGaWxlRW5jcnlwdGlvbktleSA6IHN0cmluZztcblx0c3JjRmlsZVN5bmNJZCA6IHN0cmluZztcblx0ZGVzdEZpbGVTeW5jU3RvcmVkUGF0aCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVN0b3JhZ2VKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTdG9yYWdlSm9iRGF0YScgfSxcblx0XHRcdFx0c2VydmVyVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlclVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlclBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlclByaXZhdGVLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VydmVyUHVibGljS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlclBhc3NQaHJhc2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnRwUGFzc2l2ZU1vZGUgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0c3JjRmlsZVN5bmNMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3JjRmlsZUVuY3J5cHRpb25LZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3JjRmlsZVN5bmNJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXN0RmlsZVN5bmNTdG9yZWRQYXRoIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTdG9yYWdlSm9iRGF0YSddID0gS2FsdHVyYVN0b3JhZ2VKb2JEYXRhOyJdfQ==