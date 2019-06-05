/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaStorageJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStorageJobData, _super);
    function KalturaStorageJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStorageJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaStorageJobData;
}(KalturaJobData));
export { KalturaStorageJobData };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0b3JhZ2VKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3RvcmFnZUpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ0RSxJQUFBO0lBQTJDLGlEQUFjO0lBY3JELCtCQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM5QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQTNETDtFQW1CMkMsY0FBYyxFQXlDeEQsQ0FBQTtBQXpDRCxpQ0F5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3RvcmFnZUpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgc2VydmVyVXJsPyA6IHN0cmluZztcblx0c2VydmVyVXNlcm5hbWU/IDogc3RyaW5nO1xuXHRzZXJ2ZXJQYXNzd29yZD8gOiBzdHJpbmc7XG5cdHNlcnZlclByaXZhdGVLZXk/IDogc3RyaW5nO1xuXHRzZXJ2ZXJQdWJsaWNLZXk/IDogc3RyaW5nO1xuXHRzZXJ2ZXJQYXNzUGhyYXNlPyA6IHN0cmluZztcblx0ZnRwUGFzc2l2ZU1vZGU/IDogYm9vbGVhbjtcblx0c3JjRmlsZVN5bmNMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRzcmNGaWxlRW5jcnlwdGlvbktleT8gOiBzdHJpbmc7XG5cdHNyY0ZpbGVTeW5jSWQ/IDogc3RyaW5nO1xuXHRkZXN0RmlsZVN5bmNTdG9yZWRQYXRoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN0b3JhZ2VKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGEge1xuXG4gICAgc2VydmVyVXJsIDogc3RyaW5nO1xuXHRzZXJ2ZXJVc2VybmFtZSA6IHN0cmluZztcblx0c2VydmVyUGFzc3dvcmQgOiBzdHJpbmc7XG5cdHNlcnZlclByaXZhdGVLZXkgOiBzdHJpbmc7XG5cdHNlcnZlclB1YmxpY0tleSA6IHN0cmluZztcblx0c2VydmVyUGFzc1BocmFzZSA6IHN0cmluZztcblx0ZnRwUGFzc2l2ZU1vZGUgOiBib29sZWFuO1xuXHRzcmNGaWxlU3luY0xvY2FsUGF0aCA6IHN0cmluZztcblx0c3JjRmlsZUVuY3J5cHRpb25LZXkgOiBzdHJpbmc7XG5cdHNyY0ZpbGVTeW5jSWQgOiBzdHJpbmc7XG5cdGRlc3RGaWxlU3luY1N0b3JlZFBhdGggOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdG9yYWdlSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3RvcmFnZUpvYkRhdGEnIH0sXG5cdFx0XHRcdHNlcnZlclVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJVc2VybmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJQcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlcnZlclB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZXJ2ZXJQYXNzUGhyYXNlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZ0cFBhc3NpdmVNb2RlIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHNyY0ZpbGVTeW5jTG9jYWxQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNyY0ZpbGVFbmNyeXB0aW9uS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNyY0ZpbGVTeW5jSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzdEZpbGVTeW5jU3RvcmVkUGF0aCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RvcmFnZUpvYkRhdGEnXSA9IEthbHR1cmFTdG9yYWdlSm9iRGF0YTsiXX0=