/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRemoteDropFolder } from './KalturaRemoteDropFolder';
/**
 * @record
 */
export function KalturaFtpDropFolderArgs() { }
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.host;
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.port;
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.username;
/** @type {?|undefined} */
KalturaFtpDropFolderArgs.prototype.password;
export class KalturaFtpDropFolder extends KalturaRemoteDropFolder {
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
            objectType: { type: 'c', default: 'KalturaFtpDropFolder' },
            host: { type: 's' },
            port: { type: 'n' },
            username: { type: 's' },
            password: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFtpDropFolder.prototype.host;
    /** @type {?} */
    KalturaFtpDropFolder.prototype.port;
    /** @type {?} */
    KalturaFtpDropFolder.prototype.username;
    /** @type {?} */
    KalturaFtpDropFolder.prototype.password;
}
typesMappingStorage['KalturaFtpDropFolder'] = KalturaFtpDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cERyb3BGb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGdHBEcm9wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWpHLE1BQU0sMkJBQTRCLFNBQVEsdUJBQXVCOzs7O0lBTzdELFlBQVksSUFBZ0M7UUFFeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbW90ZURyb3BGb2xkZXIsIEthbHR1cmFSZW1vdGVEcm9wRm9sZGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbW90ZURyb3BGb2xkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGdHBEcm9wRm9sZGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVtb3RlRHJvcEZvbGRlckFyZ3Mge1xuICAgIGhvc3Q/IDogc3RyaW5nO1xuXHRwb3J0PyA6IG51bWJlcjtcblx0dXNlcm5hbWU/IDogc3RyaW5nO1xuXHRwYXNzd29yZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGdHBEcm9wRm9sZGVyIGV4dGVuZHMgS2FsdHVyYVJlbW90ZURyb3BGb2xkZXIge1xuXG4gICAgaG9zdCA6IHN0cmluZztcblx0cG9ydCA6IG51bWJlcjtcblx0dXNlcm5hbWUgOiBzdHJpbmc7XG5cdHBhc3N3b3JkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRnRwRHJvcEZvbGRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRnRwRHJvcEZvbGRlcicgfSxcblx0XHRcdFx0aG9zdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwb3J0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGdHBEcm9wRm9sZGVyJ10gPSBLYWx0dXJhRnRwRHJvcEZvbGRlcjsiXX0=